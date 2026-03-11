"use client"

import { useState } from "react"

interface ColorToken {
  name: string
  variable: string
  description: string
}

const semanticColors: ColorToken[] = [
  { name: "Background", variable: "--background", description: "Primary background color" },
  { name: "Foreground", variable: "--foreground", description: "Primary text color" },
  { name: "Card", variable: "--card", description: "Card background color" },
  { name: "Card Foreground", variable: "--card-foreground", description: "Card text color" },
  { name: "Primary", variable: "--primary", description: "Primary brand color" },
  { name: "Primary Foreground", variable: "--primary-foreground", description: "Text on primary" },
  { name: "Secondary", variable: "--secondary", description: "Secondary surfaces" },
  { name: "Muted", variable: "--muted", description: "Muted backgrounds" },
  { name: "Muted Foreground", variable: "--muted-foreground", description: "Muted text" },
  { name: "Accent", variable: "--accent", description: "Gold spark highlights" },
  { name: "Spark", variable: "--spark", description: "Igniter gold accent" },
  { name: "Border", variable: "--border", description: "Border color" },
  { name: "Destructive", variable: "--destructive", description: "Error states" },
]

const chartColors = [
  { name: "Chart 1", variable: "--chart-1", hue: "Emerald" },
  { name: "Chart 2", variable: "--chart-2", hue: "Teal" },
  { name: "Chart 3", variable: "--chart-3", hue: "Lime" },
  { name: "Chart 4", variable: "--chart-4", hue: "Cyan" },
  { name: "Chart 5", variable: "--chart-5", hue: "Mint" },
]

function ColorSwatch({ variable, name, description }: ColorToken) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(`var(${variable})`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="group flex flex-col items-start text-left"
    >
      <div
        className="w-full aspect-square rounded-lg border border-border mb-3 transition-transform group-hover:scale-105"
        style={{ backgroundColor: `var(${variable})` }}
      />
      <span className="text-sm font-medium text-foreground">{name}</span>
      <span className="text-xs text-muted-foreground font-mono">
        {copied ? "Copied!" : variable}
      </span>
      <span className="text-xs text-muted-foreground mt-1">{description}</span>
    </button>
  )
}

export function ColorsSection() {
  return (
    <section id="colors" className="scroll-mt-8">
      <div className="mb-8">
        <h2 className="text-2xl font-light text-foreground mb-2">Colors & Tokens</h2>
        <p className="text-muted-foreground max-w-2xl">
          An emerald-infused palette rooted in nature. Dark backgrounds with intentional green accents. Click any swatch to copy its CSS variable.
        </p>
      </div>

      <div className="space-y-12">
        <div>
          <h3 className="text-lg font-medium text-foreground mb-6">Semantic Colors</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {semanticColors.map((color) => (
              <ColorSwatch key={color.variable} {...color} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-foreground mb-6">Brand Palette</h3>
          <div className="flex gap-6 mb-8">
            <div className="flex flex-col items-center">
              <div
                className="w-20 h-20 rounded-full border-2 border-border"
                style={{ backgroundColor: 'var(--primary)' }}
              />
              <span className="text-sm text-foreground mt-3">Primary</span>
              <span className="text-xs text-muted-foreground">Emerald</span>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="w-20 h-20 rounded-full border-2 border-border"
                style={{ backgroundColor: 'var(--spark)' }}
              />
              <span className="text-sm text-foreground mt-3">Spark</span>
              <span className="text-xs text-muted-foreground">Gold</span>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="w-20 h-20 rounded-full border-2 border-border"
                style={{ backgroundColor: 'var(--background)' }}
              />
              <span className="text-sm text-foreground mt-3">Background</span>
              <span className="text-xs text-muted-foreground">Forest</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-foreground mb-6">Chart Colors</h3>
          <div className="flex gap-4">
            {chartColors.map((color) => (
              <div key={color.variable} className="flex flex-col items-center">
                <div
                  className="w-12 h-24 rounded-full"
                  style={{ backgroundColor: `var(${color.variable})` }}
                />
                <span className="text-xs text-muted-foreground mt-2">{color.hue}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-medium text-foreground mb-4">Usage</h3>
          <pre className="bg-secondary rounded-md p-4 overflow-x-auto">
            <code className="text-sm font-mono text-foreground">
{`.element {
  background-color: var(--background);
  color: var(--foreground);
  border: 1px solid var(--border);
}

/* Tailwind CSS */
<div className="bg-background text-foreground border-border" />`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
