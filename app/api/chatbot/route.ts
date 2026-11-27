import { type NextRequest, NextResponse } from "next/server"

const CHATBOT_RESPONSES = {
  greeting: [
    "Hello! I'm here to help you with any questions about Zenbourg's services.",
    "Hi there! How can I assist you with your business needs today?",
    "Welcome to Zenbourg! I'm here to help you find the perfect solution for your business.",
  ],
  services: [
    "We build business websites (from $150, or ₹9,999 in India), websites with an admin panel (from $350), custom web apps (from $750), SEO setup and an AI WhatsApp receptionist. Which one fits what you need?",
    "We build websites, admin panels, custom web apps and integrations in Next.js, and set up SEO and analytics. Our own product, Otiva, is a live hotel management platform. What would you like to build?",
  ],
  pricing: [
    "Starting prices: business website $150 (₹9,999 in India, about 5 days), website + admin panel $350 (about 10 days), custom web app $750 (about 20 days). Every job gets a fixed quote before we start, 50% in advance.",
    "You get one fixed price before we start, paid by direct invoice: 50% to start, the rest at launch. Book a 20-minute call and we will quote your project.",
  ],
  booking: [
    "You can book a free consultation by clicking 'Book Consultation' in our navigation menu. We'll discuss your project requirements and provide personalized recommendations.",
    "Book a free 20-minute call from the 'Book Consultation' page and pick a time that suits you. You talk directly to the developer who will build it.",
  ],
  contact: [
    "Email info.zenbourg@gmail.com or call +91 74470 94686. We reply to emails within one working day.",
    "Feel free to contact us through our Contact page, email us directly, or book a consultation. We're always happy to discuss your project needs!",
  ],
  default: [
    "I'd be happy to help! Could you please be more specific about what you'd like to know about Zenbourg's services?",
    "I'm here to assist with questions about our services, pricing, booking consultations, or general inquiries. What would you like to know?",
    "Good question. The quickest way to a precise answer is a free 20-minute call, where you speak with the developer directly.",
  ],
}

function getResponseType(message: string): keyof typeof CHATBOT_RESPONSES {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
    return "greeting"
  }
  if (
    lowerMessage.includes("service") ||
    lowerMessage.includes("what do you") ||
    lowerMessage.includes("what can you")
  ) {
    return "services"
  }
  if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("how much")) {
    return "pricing"
  }
  if (lowerMessage.includes("book") || lowerMessage.includes("consultation") || lowerMessage.includes("appointment")) {
    return "booking"
  }
  if (
    lowerMessage.includes("contact") ||
    lowerMessage.includes("reach") ||
    lowerMessage.includes("phone") ||
    lowerMessage.includes("email")
  ) {
    return "contact"
  }

  return "default"
}

// Facts the assistant may use. Keep in sync with the site (27 Nov 2026). Nothing outside this list is promised.
const ZENBOURG_FACTS = `You are the website assistant for Zenbourg, a founder-led web development studio in Indore, India, run by Mayank Bhayal.
What Zenbourg builds: business websites, websites with an admin panel, custom web apps (login, dashboards, payments), integrations, SEO and analytics setup, and an AI WhatsApp receptionist.
Starting prices: business website from $150 (Rs 9,999 in India, about 5 days); website + admin panel from $350 (about 10 days); custom web app from $750 (about 20 days); AI WhatsApp receptionist Rs 15,000 setup + Rs 2,000 per month. Every project gets a fixed quote before work starts.
Terms: 50% advance, the rest at launch, direct invoice (bank transfer or UPI in India, Wise or PayPal abroad). The client owns the code, domain and accounts.
Proof: Zenbourg built and runs Otiva (otiva.in), a live hotel management platform (bookings, front desk, inventory, procurement, P&L and GST reports). Also built Entry Club (entryclub.in), a nightlife and events platform. Stack: Next.js, TypeScript, Node.js, MongoDB/PostgreSQL.
Contact: info.zenbourg@gmail.com, +91 74470 94686, or book a free 20-minute call on the Book Consultation page.
Not offered: managing paid ad budgets, guaranteed search rankings, buying followers or backlinks.
Rules: answer in the visitor's language (English or Hinglish), in at most 4 short sentences. Use only the facts above. Never invent clients, numbers, reviews, timelines or discounts. If you do not know, say so and suggest the free call. Do not ask for passwords or payment details.`

// Free tier often answers 503 "high demand": try the main model twice, then the optional backup model once.
async function askGemini(message: string): Promise<string | null> {
  const models = [process.env.GEMINI_MODEL || "gemini-3.8-flash", process.env.GEMINI_MODEL || "gemini-3.8-flash", process.env.GEMINI_FALLBACK_MODEL]
  for (const [i, m] of models.entries()) {
    if (!m) continue
    const out = await askModel(m, message)
    if (out.text) return out.text
    if (out.status !== 503 && out.status !== 429) return null
    if (i === 0) await new Promise((r) => setTimeout(r, 800))
  }
  return null
}

async function askModel(model: string, message: string): Promise<{ text: string | null; status: number }> {
  const key = process.env.GEMINI_API_KEY
  if (!key) return { text: null, status: 0 }
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), 7000)
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": key },
      signal: ctrl.signal,
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: ZENBOURG_FACTS }] },
        contents: [{ role: "user", parts: [{ text: message }] }],
        generationConfig: { maxOutputTokens: 300, temperature: 0.4 },
      }),
    })
    if (!res.ok) {
      console.error("Gemini error", model, res.status, (await res.text()).slice(0, 300))
      return { text: null, status: res.status }
    }
    const data = await res.json()
    const text = (data?.candidates?.[0]?.content?.parts || []).map((p: { text?: string }) => p.text || "").join("").trim()
    return { text: text || null, status: res.status }
  } catch (e) {
    console.error("Gemini request failed", e)
    return { text: null, status: 0 }
  } finally {
    clearTimeout(timer)
  }
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }
    const question = message.slice(0, 1000)

    // Real AI answer when GEMINI_API_KEY is set; otherwise (or on any error) the checked canned answers below.
    const ai = await askGemini(question)
    if (ai) return NextResponse.json({ response: ai, source: "ai" })

    const responses = CHATBOT_RESPONSES[getResponseType(question)]
    const response = responses[Math.floor(Math.random() * responses.length)]
    return NextResponse.json({ response, source: "fallback" })
  } catch (error) {
    console.error("Chatbot error:", error)
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 })
  }
}
