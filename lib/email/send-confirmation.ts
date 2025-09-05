import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

export async function sendConfirmationEmail(to: string, name: string, service: string) {
  await transporter.sendMail({
    from: `Consulting Team <${process.env.EMAIL_FROM}>`,
    to,
    subject: "Your Consultation Request Has Been Received!",
    html: `
      <h2>Hi ${name},</h2>
      <p>Thank you for choosing our <strong>${service}</strong> service.</p>
      <p>We’ve received your consultation request and will contact you shortly.</p>
      <p><em>— The Consulting Team</em></p>
    `
  })
}

export async function sendOwnerNotificationEmail(data: any) {
  await transporter.sendMail({
    from: `Consulting Team <${process.env.EMAIL_FROM}>`,
    to: "info.zenbourg@gmail.com", // OWNER EMAIL
    subject: "📩 New Consultation Request Received",
    html: `
      <h2>New Consultation Request</h2>
      <table border="1" cellspacing="0" cellpadding="6">
        <tr><td><strong>Full Name</strong></td><td>${data.fullName}</td></tr>
        <tr><td><strong>Position Title</strong></td><td>${data.positionTitle}</td></tr>
        <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
        <tr><td><strong>Phone Number</strong></td><td>${data.phoneNumber}</td></tr>
        <tr><td><strong>Company</strong></td><td>${data.companyName}</td></tr>
        <tr><td><strong>Company Size</strong></td><td>${data.companySize}</td></tr>
        <tr><td><strong>Budget Range</strong></td><td>${data.budgetRange || "N/A"}</td></tr>
        <tr><td><strong>Timeline</strong></td><td>${data.projectTimeline || "N/A"}</td></tr>
        <tr><td><strong>Requirements</strong></td><td>${data.detailedRequirements}</td></tr>
        <tr><td><strong>Challenges</strong></td><td>${data.currentChallenges || "N/A"}</td></tr>
        <tr><td><strong>Business Goals</strong></td><td>${data.businessGoals || "N/A"}</td></tr>
        <tr><td><strong>Service</strong></td><td>${data.serviceName}</td></tr>
        <tr><td><strong>Price</strong></td><td>${data.servicePrice}</td></tr>
      </table>
    `
  })
}
