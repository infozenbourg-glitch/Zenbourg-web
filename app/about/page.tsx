import Image from "next/image"
import type { Metadata } from "next"
import { Linkedin } from "lucide-react"
import { Page, Hero, Section, Grid, Card, CtaBand, PrimaryLink, GhostLink, BOOK_URL, display } from "@/components/zb"

export const metadata: Metadata = {
  title: "About Zenbourg | Founder-led web development, Indore",
  description: "Zenbourg is a founder-led studio in Indore, India. We build websites and web apps, and we run our own hotel platform, Otiva.",
}

export default function AboutPage() {
  return (
    <Page>
      <Hero eyebrow="About Zenbourg" title="A small studio that ships" accent="real software."
        lead="Zenbourg builds websites and web apps for businesses in India and abroad. We also build and run our own product, Otiva, so we know what it takes to keep software working after launch day.">
        <PrimaryLink href={BOOK_URL} external>Book a 20-minute call</PrimaryLink>
        <GhostLink href="/portfolio">See our work</GhostLink>
      </Hero>

      <Section title="Who you work with" band>
        <div className="grid items-center gap-10 md:grid-cols-[340px_1fr]">
          <div className="relative aspect-[3/4] w-full max-w-[340px] overflow-hidden rounded-2xl">
            <Image src="/work/mayank-bhayal-founder.jpg" alt="Mayank Bhayal, founder of Zenbourg" fill className="object-cover object-[center_30%]" />
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#8b929c]">Founder</p>
            <h3 className={`${display.className} mt-2 text-3xl font-bold md:text-4xl`}>Mayank Bhayal</h3>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#a3a9b2]">
              Full-stack developer. I built Otiva, a hotel management platform, end to end: bookings, front desk, inventory,
              procurement and finance reports. At Zenbourg you talk to me directly, from the first call to the launch.
            </p>
            <a href="https://www.linkedin.com/in/mayank-bhayal-5a7123202/" target="_blank" rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-white underline-offset-4 hover:underline">
              <Linkedin className="h-5 w-5" /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </Section>

      <Section title="What we believe" lead="Three rules we hold ourselves to on every project.">
        <Grid>
          <Card title="Show, don't promise">Every claim on this site links to something you can open. No stock case studies, no made-up numbers.</Card>
          <Card title="One fixed price">You get the full cost before we start. If the scope changes, we agree on it in writing first.</Card>
          <Card title="You own everything">Code, domain, hosting and accounts sit in your name. You can take the project anywhere, any time.</Card>
        </Grid>
      </Section>

      <Section title="Where we are" band>
        <div className="grid gap-5 sm:grid-cols-3">
          <div><p className="text-sm uppercase tracking-[0.18em] text-[#8b929c]">Based in</p><p className="mt-2 text-xl font-semibold">Indore, India</p></div>
          <div><p className="text-sm uppercase tracking-[0.18em] text-[#8b929c]">Work with</p><p className="mt-2 text-xl font-semibold">India and worldwide, remote</p></div>
          <div><p className="text-sm uppercase tracking-[0.18em] text-[#8b929c]">Email</p><p className="mt-2 select-all text-xl font-semibold">info.zenbourg@gmail.com</p></div>
        </div>
      </Section>

      <CtaBand />
    </Page>
  )
}
