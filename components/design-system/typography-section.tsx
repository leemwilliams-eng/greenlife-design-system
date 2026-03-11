"use client"

const typeScale = [
  { name: "Display", size: "text-5xl", weight: "font-light", leading: "leading-tight", example: "Be present" },
  { name: "Heading 1", size: "text-4xl", weight: "font-light", leading: "leading-tight", example: "Have knowledge" },
  { name: "Heading 2", size: "text-3xl", weight: "font-normal", leading: "leading-snug", example: "Pay attention" },
  { name: "Heading 3", size: "text-2xl", weight: "font-normal", leading: "leading-snug", example: "Every spark matters" },
  { name: "Heading 4", size: "text-xl", weight: "font-medium", leading: "leading-normal", example: "Start the fire" },
  { name: "Body Large", size: "text-lg", weight: "font-normal", leading: "leading-relaxed", example: "Every choice is deliberate" },
  { name: "Body", size: "text-base", weight: "font-normal", leading: "leading-relaxed", example: "Intentional design choices" },
  { name: "Body Small", size: "text-sm", weight: "font-normal", leading: "leading-relaxed", example: "Small but purposeful" },
  { name: "Caption", size: "text-xs", weight: "font-medium", leading: "leading-normal", example: "Sparks thrown" },
]

const fontWeights = [
  { name: "Light", class: "font-light", value: "300" },
  { name: "Normal", class: "font-normal", value: "400" },
  { name: "Medium", class: "font-medium", value: "500" },
  { name: "Semibold", class: "font-semibold", value: "600" },
  { name: "Bold", class: "font-bold", value: "700" },
]

export function TypographySection() {
  return (
    <section id="typography" className="scroll-mt-8">
      <div className="mb-8">
        <h2 className="text-2xl font-light text-foreground mb-2">Typography</h2>
        <p className="text-muted-foreground max-w-2xl">
          Clean, purposeful typography. Light weights for impact, balanced hierarchy for clarity. Built on Geist.
        </p>
      </div>

      <div className="space-y-12">
        <div className="bg-card border border-border rounded-lg p-8">
          <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
            <div className="text-center">
              <p className="text-6xl font-sans mb-4">Geist Sans</p>
              <p className="text-sm text-muted-foreground">Primary typeface</p>
            </div>
            <div className="text-center">
              <p className="text-6xl font-mono mb-4">Geist Mono</p>
              <p className="text-sm text-muted-foreground">Monospace typeface</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-foreground mb-6">Type Scale</h3>
          <div className="bg-card border border-border rounded-lg divide-y divide-border">
            {typeScale.map((type) => (
              <div
                key={type.name}
                className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 p-4"
              >
                <div className="w-32 shrink-0">
                  <span className="text-xs text-muted-foreground font-mono">{type.name}</span>
                </div>
                <div className="flex-1">
                  <p className={`${type.size} ${type.weight} ${type.leading} text-foreground`}>
                    {type.example}
                  </p>
                </div>
                <div className="text-xs text-muted-foreground font-mono shrink-0">
                  {type.size} {type.weight}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-foreground mb-6">Font Weights</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {fontWeights.map((weight) => (
              <div
                key={weight.name}
                className="bg-card border border-border rounded-lg p-4 text-center"
              >
                <p className={`text-3xl ${weight.class} text-foreground mb-2`}>Aa</p>
                <p className="text-sm text-foreground">{weight.name}</p>
                <p className="text-xs text-muted-foreground font-mono">{weight.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-medium text-foreground mb-4">Usage</h3>
          <pre className="bg-secondary rounded-md p-4 overflow-x-auto">
            <code className="text-sm font-mono text-foreground">
{`/* Tailwind CSS */
<h1 className="text-4xl font-semibold leading-tight">Heading</h1>
<p className="text-base font-normal leading-relaxed">Body text</p>
<code className="font-mono text-sm">Code snippet</code>

/* CSS Variables */
font-family: var(--font-sans);
font-family: var(--font-mono);`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
