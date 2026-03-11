"use client"

import { Grid3X3, Palette, Type, Layers } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Colors",
    description: "A high contrast, accessible color system.",
  },
  {
    icon: Grid3X3,
    title: "Icons",
    description: "Icon set tailored for developer tools.",
  },
  {
    icon: Type,
    title: "Typography",
    description: "Specifically designed for developers and designers.",
  },
  {
    icon: Layers,
    title: "Components",
    description: "Building blocks for React applications.",
  },
]

export function IntroductionSection() {
  return (
    <section id="introduction" className="scroll-mt-8">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 text-balance">
          Design System
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          A comprehensive design system for building consistent, accessible, and beautiful web experiences. Built for developers and designers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group bg-card border border-border rounded-lg p-6 hover:border-muted-foreground/50 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-md bg-secondary flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
