"use server"

import { sendConfirmationEmail } from "./email/send-confirmation"
import nodemailer from "nodemailer"

interface ContactFormData {
  fullName: string
  email: string
  subject: string
  message: string
}

export async function submitContactForm(data: ContactFormData) {
  try {
    // 1. Send email to your team inbox
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"${data.fullName}" <${data.email}>`,
      to: "info.zenbourg@gmail.com", // your admin inbox
      subject: data.subject,
      text: `
        Name: ${data.fullName}
        Email: ${data.email}
        Subject: ${data.subject}
        Message:
        ${data.message}
      `,
    })

    // 2. Send auto-reply confirmation email to user
    await sendConfirmationEmail(data.email, data.fullName, data.subject)

    return { success: true }
  } catch (error) {
    console.error("Contact form submission error:", error)
    return {
      success: false,
      error: "Failed to submit contact form",
    }
  }
}
