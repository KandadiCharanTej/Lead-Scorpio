import { NextResponse } from "next/server";

// Rate limiting map for basic abuse prevention (in-memory per runtime instance)
const rateLimitMap = new Map<string, { count: number; firstRequestTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

export async function POST(req: Request) {
  try {
    // 1. Basic IP / origin rate limiting
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
    const now = Date.now();
    const rateInfo = rateLimitMap.get(ip);

    if (rateInfo) {
      if (now - rateInfo.firstRequestTime < RATE_LIMIT_WINDOW_MS) {
        if (rateInfo.count >= MAX_REQUESTS_PER_WINDOW) {
          return NextResponse.json(
            { error: "Too many submission attempts. Please wait a minute and try again." },
            { status: 429 }
          );
        }
        rateInfo.count += 1;
      } else {
        rateLimitMap.set(ip, { count: 1, firstRequestTime: now });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, firstRequestTime: now });
    }

    // 2. Parse payload safely
    const body = await req.json();
    const { name, email, company, website, sell, achieve } = body || {};

    // 3. Server-side validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "Please provide your name." }, { status: 400 });
    }
    if (name.trim().length > 100) {
      return NextResponse.json({ error: "Name exceeds maximum length (100 characters)." }, { status: 400 });
    }

    if (!email || typeof email !== "string" || email.trim().length === 0) {
      return NextResponse.json({ error: "Please provide your work email address." }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim()) || email.trim().length > 150) {
      return NextResponse.json({ error: "Please provide a valid work email address." }, { status: 400 });
    }

    // Optional field length guards
    const safeCompany = typeof company === "string" ? company.trim().slice(0, 100) : "";
    const safeWebsite = typeof website === "string" ? website.trim().slice(0, 200) : "";
    const safeSell = typeof sell === "string" ? sell.trim().slice(0, 1000) : "";
    const safeAchieve = typeof achieve === "string" ? achieve.trim().slice(0, 1000) : "";

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || "leadscorpioofficial@gmail.com";

    // 4. If email delivery service credentials are provided, dispatch email via transactional API
    if (apiKey) {
      try {
        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            from: process.env.EMAIL_FROM || "LeadScorpio Inquiries <onboarding@resend.dev>",
            to: recipientEmail,
            subject: `LeadScorpio Inbound Strategy Request: ${safeCompany || name}`,
            reply_to: email.trim(),
            text: [
              `New Inquiry from LeadScorpio Website`,
              `-------------------------------------`,
              `Name: ${name.trim()}`,
              `Work Email: ${email.trim()}`,
              `Company: ${safeCompany || "N/A"}`,
              `Website: ${safeWebsite || "N/A"}`,
              ``,
              `What they sell:`,
              `${safeSell || "N/A"}`,
              ``,
              `What they want to achieve:`,
              `${safeAchieve || "N/A"}`,
            ].join("\n"),
          }),
        });

        if (!resendRes.ok) {
          const errData = await resendRes.text();
          console.error("Resend API error:", errData);
          return NextResponse.json(
            { error: "Email delivery service reported an issue. Please contact leadscorpioofficial@gmail.com directly." },
            { status: 502 }
          );
        }

        return NextResponse.json({ success: true, delivered: true }, { status: 200 });
      } catch (err) {
        console.error("Failed to connect to email provider:", err);
        return NextResponse.json(
          { error: "Could not reach email delivery provider. Please reach out to leadscorpioofficial@gmail.com." },
          { status: 500 }
        );
      }
    }

    // 5. If RESEND_API_KEY is not yet configured, log for operational awareness and return safe response
    console.warn(
      `[LeadScorpio Contact Form] Submission received from ${email.trim()} for ${safeCompany || "N/A"}. Note: RESEND_API_KEY is not set in environment.`
    );

    return NextResponse.json(
      {
        success: true,
        delivered: false,
        message: "Inquiry registered. (Email notification provider pending server configuration).",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unexpected error in /api/contact:", error);
    return NextResponse.json({ error: "An unexpected server error occurred." }, { status: 500 });
  }
}
