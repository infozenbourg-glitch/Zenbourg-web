import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const data = await req.json();

        // Transporter config (Gmail example — replace with your SMTP or SendGrid)
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // your Gmail / SMTP user
                pass: process.env.EMAIL_PASS, // Gmail App Password
            },
        });

        // Format the email body
        const emailHtml = `
      <h2>New Custom Quote Request</h2>
      <p><b>Name:</b> ${data.firstName} ${data.lastName}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone || "N/A"}</p>
      <p><b>Company:</b> ${data.company || "N/A"}</p>
      <p><b>Website:</b> ${data.website || "N/A"}</p>
      <p><b>Services:</b> ${data.services?.join(", ") || "None"}</p>
      <p><b>Project Title:</b> ${data.projectTitle}</p>
      <p><b>Description:</b> ${data.projectDescription}</p>
      <p><b>Budget:</b> ${data.budget}</p>
      <p><b>Timeline:</b> ${data.timeline}</p>
      <p><b>Has Existing Website:</b> ${data.hasExistingWebsite ? "Yes" : "No"}</p>
      <p><b>Needs Hosting:</b> ${data.needsHosting ? "Yes" : "No"}</p>
      <p><b>Needs Maintenance:</b> ${data.needsMaintenance ? "Yes" : "No"}</p>
      <p><b>Needs Training:</b> ${data.needsTraining ? "Yes" : "No"}</p>
      <p><b>Additional Notes:</b> ${data.additionalNotes || "N/A"}</p>
      <p><b>Heard About Us:</b> ${data.hearAboutUs || "N/A"}</p>
    `;

        // Send mail
        await transporter.sendMail({
            from: `"Website Quote" <${process.env.EMAIL_USER}>`,
            to: "owner@example.com", // owner’s email here
            subject: "New Custom Quote Request",
            html: emailHtml,
        });

        return NextResponse.json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Email error:", error);
        return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
    }
}
