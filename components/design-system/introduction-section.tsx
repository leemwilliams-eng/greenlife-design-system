"use client"

import Image from "next/image"
import { Palette, Type, Layers, Grid3X3, Sparkles } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Colors & Tokens",
    description: "Emerald-infused palette for dark interfaces.",
  },
  {
    icon: Type,
    title: "Typography",
    description: "Clean, purposeful type scales.",
  },
  {
    icon: Grid3X3,
    title: "Icons",
    description: "Thoughtfully selected icon library.",
  },
  {
    icon: Layers,
    title: "Components",
    description: "Minimal, functional building blocks.",
  },
]

export function IntroductionSection() {
  return (
    <section id="introduction" className="scroll-mt-8">
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <Image
            src="/images/green-life-logo.png"
            alt="Green Life"
            width={48}
            height={48}
            className="w-12 h-12 object-contain"
          />
          <span className="text-sm font-medium text-primary tracking-wide uppercase">Green Life Design System</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-light text-foreground mb-6 leading-tight">
          Be present.<br />
          <span className="text-primary">Have knowledge.</span><br />
          Pay attention.
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
          A minimalist design system inspired by intentional living. Every element serves a purpose. Every choice is deliberate.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-card border border-border rounded-lg">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Philosophy</span>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Every design choice throws a spark. Every spark can start a fire. This system is built to help you see clearly, create intentionally, and build without pretense.
        </p>
      </div>
    </section>
  )
}
