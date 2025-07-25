// Location: app/api/contact/route.ts

import { type NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { Resend } from "resend";

// Initialize Resend with the API key from your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Destructure the validated data
    const { name, email, message } = validatedData;

    // Use Resend to send the email
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // This is a required field for the Resend free plan
      to: "apurvamalasi5@gmail.com", // Your email address where you want to receive messages
      subject: `New Message from ${name}`,
      reply_to: email, // Set the sender's email as the reply-to address
      html: `
        <p>You have received a new message from your website's contact form.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Handle potential errors from Resend
    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }

    console.log("Email sent successfully:", data);
    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });

  } catch (error) {
    // This catches errors from validation (contactSchema.parse) or other issues
    console.error("Contact form error:", error);
    // You might want to return a more specific error for validation failures
    return NextResponse.json({ error: "Invalid data provided" }, { status: 400 });
  }
}

// The GET function can remain as a placeholder
export async function GET() {
  return NextResponse.json({ message: "This endpoint only accepts POST requests." }, { status: 405 });
}
