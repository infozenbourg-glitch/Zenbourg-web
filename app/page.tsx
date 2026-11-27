import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Bricolage_Grotesque } from "next/font/google"
import { ArrowUpRight, Check } from "lucide-react"

// Homepage redesign (27 Nov 2026). Only real work and real terms: Otiva (live hotel platform) and Entry Club (live
// site). No invented clients, testimonials or metrics.
const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "700", "800"], display: "swap" })

export const metadata: Metadata = {
  title: "Zenbourg | Custom websites and web apps, built fast",
  description:
    "Next.js websites, admin panels and custom web apps from Indore, India. We built Otiva, a live hotel management platform. Fixed price, direct invoice, source code yours.",
}

const BOOK = "https://calendar.app.google/PiJbdqC2qc4AWoQ78"

const packages = [
  { name: "Website", usd: "$150", inr: "₹9,999", time: "about 5 days", points: ["Up to 5 pages, mobile first", "Contact or enquiry form", "Basic SEO, fast hosting setup"] },
  { name: "Website + admin", usd: "$350", inr: "on request", time: "about 10 days", points: ["Up to 10 pages", "Admin panel: you edit content yourself", "Booking or enquiry flow, SEO"] },
  { name: "Custom web app", usd: "$750", inr: "on request", time: "about 20 days", points: ["Login and user roles", "Dashboard with your data", "Payments integration"] },
]

const terms = [
  ["Fixed price", "You know the full cost before we start. No hourly meter."],
  ["50% to start", "Half in advance, the rest when it is live and you are happy."],
  ["Direct invoice", "Bank transfer or UPI in India, Wise or PayPal abroad. No platform fees in the middle."],
  ["Your code", "The repository and every account are in your name from day one."],
]

export default function HomePage() {
  return (
    <main className="bg-[#0d0f12] text-[#f1f2f4]">
      {/* Hero: the claim, then the proof (a real screen from a product we run in production) */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-28 md:px-8 md:pt-36">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8b929c]">Zenbourg · Indore, India</p>
        <h1 className={`${display.className} mt-5 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl`}>
          We build the software a business <span style={{ color: "#e2541c" }}>actually runs on.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#a3a9b2] md:text-xl">
          Websites, admin panels and custom web apps in Next.js. Our own product, Otiva, runs hotels every day:
          bookings, inventory, procurement and finance in one system.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href={BOOK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#e2541c] px-6 py-4 font-semibold text-[#0d0f12] transition hover:bg-[#f06a33] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e2541c]">
            Book a 20-minute call <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href="#pricing" className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-4 font-semibold transition hover:border-white/60">
            See prices
          </a>
        </div>
        <div className="relative mt-14 overflow-hidden rounded-2xl border border-white/10 bg-[#1a1d22] shadow-[0_40px_80px_-30px_rgba(20,22,26,0.45)]">
          <div className="flex h-10 items-center gap-2 px-4">
            <span className="h-3 w-3 rounded-full bg-[#3a3f47]" /><span className="h-3 w-3 rounded-full bg-[#3a3f47]" /><span className="h-3 w-3 rounded-full bg-[#3a3f47]" />
            <span className="ml-4 rounded-md bg-[#262a31] px-3 py-1 font-mono text-xs text-[#8b929c]">otiva.in/admin/bookings</span>
          </div>
          <Image src="/work/otiva-booking.jpg" alt="Otiva booking screen: room, meal plan and total on one screen" width={1600} height={715} priority className="h-auto w-full" />
        </div>
      </section>

      {/* Work: real, live projects only */}
      <section id="work" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <h2 className={`${display.className} text-3xl font-bold tracking-tight md:text-5xl`}>Work you can open right now</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-5">
            <a href="https://otiva.in" target="_blank" rel="noopener noreferrer" className="group overflow-hidden rounded-2xl border border-white/10 bg-[#16191e] md:col-span-3">
              <Image src="/work/otiva-inventory.jpg" alt="Otiva inventory dashboard with stock alerts and cost charts" width={1470} height={779} className="h-auto w-full" />
              <div className="flex items-start justify-between gap-4 p-6">
                <div>
                  <h3 className={`${display.className} text-2xl font-bold`}>Otiva</h3>
                  <p className="mt-1 text-[#a3a9b2]">Hotel management platform: bookings with live pricing, front desk, inventory, procurement, P&amp;L and GST reports. Live in production.</p>
                  <p className="mt-3 font-mono text-xs text-[#8b929c]">Next.js · TypeScript · MongoDB</p>
                </div>
                <ArrowUpRight className="h-6 w-6 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </a>
            <div className="flex flex-col gap-6 md:col-span-2">
              <a href="https://entryclub.in" target="_blank" rel="noopener noreferrer" className="group flex flex-1 flex-col justify-between rounded-2xl border border-white/10 bg-[#07080c] p-7 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.3em] text-white/60">Live site</span>
                  <ArrowUpRight className="h-6 w-6 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <div>
                  <h3 className={`${display.className} mt-10 text-3xl font-bold tracking-wide`}>ENTRY CLUB</h3>
                  <p className="mt-2 text-white/70">Premium nightlife and events platform, with its own user and admin back ends.</p>
                </div>
              </a>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#16191e]">
                <Image src="/work/otiva-calendar.jpg" alt="Otiva reservations calendar" width={1600} height={664} className="h-auto w-full" />
                <p className="p-5 text-sm text-[#a3a9b2]">Otiva reservations calendar: check-ins, check-outs and room status at a glance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing: same packages as our live catalog */}
      <section id="pricing" className="border-y border-white/10 bg-[#121418] text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <h2 className={`${display.className} text-3xl font-bold tracking-tight md:text-5xl`}>What we build, and what it costs</h2>
          <p className="mt-4 max-w-2xl text-white/70">Starting prices. A short call gives you an exact fixed quote.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {packages.map((p) => (
              <div key={p.name} className="flex flex-col rounded-2xl border border-white/12 bg-white/[0.04] p-7">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className={`${display.className} mt-4 text-5xl font-extrabold`}>{p.usd}</p>
                <p className="mt-1 text-sm text-white/60">India: {p.inr} · {p.time}</p>
                <ul className="mt-6 space-y-3 text-white/85">
                  {p.points.map((x) => (
                    <li key={x} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-[#e2541c]" />{x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <h2 className={`${display.className} text-3xl font-bold tracking-tight md:text-5xl`}>How we work</h2>
        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {terms.map(([t, d]) => (
            <div key={t} className="border-t-2 border-[#e2541c] pt-5">
              <h3 className="text-xl font-semibold">{t}</h3>
              <p className="mt-2 leading-relaxed text-[#a3a9b2]">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-[320px_1fr] md:px-8">
          <Image src="/work/mayank-bhayal-founder.jpg" alt="Mayank Bhayal, founder of Zenbourg" width={1086} height={1448} className="h-auto w-full max-w-[320px] rounded-2xl object-cover" />
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8b929c]">Who you talk to</p>
            <h2 className={`${display.className} mt-3 text-3xl font-bold tracking-tight md:text-4xl`}>Mayank Bhayal, founder</h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#a3a9b2]">
              I built Otiva end to end and still run it. When you work with Zenbourg, you talk to the person writing your code,
              not an account manager. One call, a fixed quote, and a working link to review every week.
            </p>
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <section className="bg-[#e2541c] text-[#14161a]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-center md:px-8">
          <h2 className={`${display.className} max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl`}>Tell us what you need. Get a fixed quote in one call.</h2>
          <div className="flex flex-wrap gap-3">
            <a href={BOOK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#14161a] px-6 py-4 font-semibold text-white hover:bg-[#2a2d33]">
              Book a call <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link href="/contact" className="inline-flex items-center rounded-lg border-2 border-[#14161a] px-6 py-4 font-semibold">Write to us</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
