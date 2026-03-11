"use client"

const typeScale = [
  { name: "Display", size: "text-5xl", weight: "font-bold", leading: "leading-tight", example: "Display Text" },
  { name: "Heading 1", size: "text-4xl", weight: "font-semibold", leading: "leading-tight", example: "Heading 1" },
  { name: "Heading 2", size: "text-3xl", weight: "font-semibold", leading: "leading-snug", example: "Heading 2" },
  { name: "Heading 3", size: "text-2xl", weight: "font-semibold", leading: "leading-snug", example: "Heading 3" },
  { name: "Heading 4", size: "text-xl", weight: "font-medium", leading: "leading-normal", example: "Heading 4" },
  { name: "Body Large", size: "text-lg", weight: "font-normal", leading: "leading-relaxed", example: "Body text large" },
  { name: "Body", size: "text-base", weight: "font-normal", leading: "leading-relaxed", example: "Body text regular" },
  { name: "Body Small", size: "text-sm", weight: "font-normal", leading: "leading-relaxed", example: "Body text small" },
  { name: "Caption", size: "text-xs", weight: "font-normal", leading: "leading-normal", example: "Caption text" },
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
        <h2 className="text-2xl font-semibold text-foreground mb-2">Typography</h2>
        <p className="text-muted-foreground max-w-2xl">
          Built on Geist Sans and Geist Mono, optimized for developer interfaces and technical documentation.
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
