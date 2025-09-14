// app/api/contact/route.js
import { NextResponse } from "next/server";

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v || "");
}

export async function POST(req) {
  try {
    const form = await req.formData();

    // Honeypot
    if (form.get("company")) {
      return NextResponse.json({ ok: true });
    }

    const payload = {
      name: (form.get("name") || "").toString().trim(),
      email: (form.get("email") || "").toString().trim(),
      subject: (form.get("subject") || "general").toString(),
      phone: (form.get("phone") || "").toString().trim(),
      message: (form.get("message") || "").toString().trim(),
    };

    // Server-validering
    if (!payload.name || !isEmail(payload.email) || !payload.message) {
      return NextResponse.json({ error: "Invalid input." }, { status: 400 });
    }

    // TODO: Koppla e-post här (Nodemailer + SMTP eller tredjeparts-API)
    // Exempel (pseudo):
    // await sendMail({
    //   to: process.env.CONTACT_TO,
    //   from: process.env.CONTACT_FROM,
    //   subject: `[QW̄N] ${payload.subject} — ${payload.name}`,
    //   text: `${payload.name} <${payload.email}> (${payload.phone})\n\n${payload.message}`,
    // });

    // Temporär log (dev)
    console.log("[contact] incoming:", payload);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
