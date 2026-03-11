"use client"

const spacingScale = [
  { name: "0", value: "0px", class: "0" },
  { name: "0.5", value: "2px", class: "0.5" },
  { name: "1", value: "4px", class: "1" },
  { name: "2", value: "8px", class: "2" },
  { name: "3", value: "12px", class: "3" },
  { name: "4", value: "16px", class: "4" },
  { name: "5", value: "20px", class: "5" },
  { name: "6", value: "24px", class: "6" },
  { name: "8", value: "32px", class: "8" },
  { name: "10", value: "40px", class: "10" },
  { name: "12", value: "48px", class: "12" },
  { name: "16", value: "64px", class: "16" },
]

const breakpoints = [
  { name: "sm", width: "640px", description: "Small devices, phones in landscape" },
  { name: "md", width: "768px", description: "Medium devices, tablets" },
  { name: "lg", width: "1024px", description: "Large devices, laptops" },
  { name: "xl", width: "1280px", description: "Extra large devices, desktops" },
  { name: "2xl", width: "1536px", description: "Wide screens" },
]

export function LayoutSection() {
  return (
    <section id="layout" className="scroll-mt-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-2">Layout & Grid</h2>
        <p className="text-muted-foreground max-w-2xl">
          Consistent spacing, responsive breakpoints, and grid systems for building layouts.
        </p>
      </div>

      <div className="space-y-12">
        {/* Grid Demo */}
        <div>
          <h3 className="text-lg font-medium text-foreground mb-6">Grid System</h3>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="relative">
              <div className="grid grid-cols-8 gap-4">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded border border-dashed border-muted-foreground/30"
                  />
                ))}
              </div>
              <div className="absolute -left-4 top-0 bottom-0 w-px border-l border-dashed border-muted-foreground/50" />
              <div className="absolute -right-4 top-0 bottom-0 w-px border-l border-dashed border-muted-foreground/50" />
              <div className="absolute left-0 -top-4 right-0 h-px border-t border-dashed border-muted-foreground/50" />
              <div className="absolute left-0 -bottom-4 right-0 h-px border-t border-dashed border-muted-foreground/50" />
              <div className="absolute -left-6 -top-6 w-2 h-2 text-muted-foreground">+</div>
              <div className="absolute -right-6 -bottom-6 w-2 h-2 text-muted-foreground">+</div>
            </div>
            <p className="text-sm text-muted-foreground mt-8 text-center">
              8-column grid with responsive scaling
            </p>
          </div>
        </div>

        {/* Spacing Scale */}
        <div>
          <h3 className="text-lg font-medium text-foreground mb-6">Spacing Scale</h3>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border">
                  <tr>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                      Token
                    </th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                      Value
                    </th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                      Preview
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {spacingScale.map((space) => (
                    <tr key={space.name}>
                      <td className="px-4 py-3">
                        <code className="text-sm font-mono text-foreground">
                          space-{space.class}
                        </code>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-sm text-muted-foreground">{space.value}</span>
                      </td>
                      <td className="px-4 py-3">
                        <div
                          className="h-4 bg-chart-1 rounded"
                          style={{ width: space.value === "0px" ? "2px" : space.value }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Breakpoints */}
        <div>
          <h3 className="text-lg font-medium text-foreground mb-6">Breakpoints</h3>
          <div className="space-y-3">
            {breakpoints.map((bp, index) => (
              <div
                key={bp.name}
                className="flex items-center gap-4"
              >
                <div className="w-16 shrink-0">
                  <span className="text-sm font-mono text-chart-1">{bp.name}</span>
                </div>
                <div
                  className="h-8 bg-secondary rounded-r-md border-l-4 border-chart-1 flex items-center px-3"
                  style={{ width: `${((index + 1) / breakpoints.length) * 100}%` }}
                >
                  <span className="text-xs text-muted-foreground font-mono">{bp.width}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-card border border-border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="border-b border-border">
                <tr>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                    Prefix
                  </th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                    Min Width
                  </th>
                  <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-4 py-3">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {breakpoints.map((bp) => (
                  <tr key={bp.name}>
                    <td className="px-4 py-3">
                      <code className="text-sm font-mono text-foreground">{bp.name}:</code>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm text-muted-foreground font-mono">{bp.width}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm text-muted-foreground">{bp.description}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Usage */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-medium text-foreground mb-4">Usage</h3>
          <pre className="bg-secondary rounded-md p-4 overflow-x-auto">
            <code className="text-sm font-mono text-foreground">
{`/* Grid Layout */
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card />
  <Card />
  <Card />
</div>

/* Flex Layout */
<div className="flex items-center justify-between gap-4">
  <Logo />
  <Navigation />
</div>

/* Responsive Spacing */
<div className="p-4 md:p-6 lg:p-8">
  <Content />
</div>`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
