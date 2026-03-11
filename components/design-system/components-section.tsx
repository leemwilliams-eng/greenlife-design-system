"use client"

import { useState } from "react"
import { Copy, Check, Grid3X3, List, Search } from "lucide-react"

export function ComponentsSection() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [activeView, setActiveView] = useState<"grid" | "list">("grid")

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <section id="components" className="scroll-mt-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-2">Components</h2>
        <p className="text-muted-foreground max-w-2xl">
          Building blocks for React applications. All components follow accessibility best practices and support dark themes.
        </p>
      </div>

      <div className="space-y-10">
        {/* Buttons */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h3 className="text-lg font-medium text-foreground">Buttons</h3>
            <button
              onClick={() => copyToClipboard(`<Button>Default</Button>`, "buttons")}
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {copiedCode === "buttons" ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              Copy
            </button>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-4 mb-6">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                Primary
              </button>
              <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm font-medium hover:bg-secondary/80 transition-colors">
                Secondary
              </button>
              <button className="px-4 py-2 bg-transparent border border-border text-foreground rounded-md text-sm font-medium hover:bg-accent transition-colors">
                Outline
              </button>
              <button className="px-4 py-2 text-foreground text-sm font-medium hover:bg-accent rounded-md transition-colors">
                Ghost
              </button>
              <button className="px-4 py-2 bg-destructive text-destructive-foreground rounded-md text-sm font-medium hover:bg-destructive/90 transition-colors">
                Destructive
              </button>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="px-3 py-1.5 bg-primary text-primary-foreground rounded-md text-xs font-medium">
                Small
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium">
                Default
              </button>
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md text-base font-medium">
                Large
              </button>
            </div>
          </div>
        </div>

        {/* Inputs */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h3 className="text-lg font-medium text-foreground">Inputs</h3>
            <button
              onClick={() => copyToClipboard(`<Input placeholder="Enter text..." />`, "inputs")}
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {copiedCode === "inputs" ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              Copy
            </button>
          </div>
          <div className="p-6 space-y-4">
            <div className="max-w-sm">
              <label className="block text-sm font-medium text-foreground mb-2">
                Label
              </label>
              <input
                type="text"
                placeholder="Enter text..."
                className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="max-w-sm">
              <label className="block text-sm font-medium text-foreground mb-2">
                With Icon
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-3 py-2 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
            <div className="max-w-sm">
              <label className="block text-sm font-medium text-foreground mb-2">
                Disabled
              </label>
              <input
                type="text"
                placeholder="Disabled input"
                disabled
                className="w-full px-3 py-2 bg-muted border border-border rounded-md text-muted-foreground cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        {/* Toggle Groups */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h3 className="text-lg font-medium text-foreground">Toggle Groups</h3>
          </div>
          <div className="p-6">
            <div className="inline-flex items-center bg-secondary rounded-lg p-1">
              <button
                onClick={() => setActiveView("grid")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  activeView === "grid"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
                Grid
              </button>
              <button
                onClick={() => setActiveView("list")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  activeView === "list"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <List className="w-4 h-4" />
                List
              </button>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h3 className="text-lg font-medium text-foreground">Badges</h3>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                Default
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                Secondary
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-destructive text-destructive-foreground">
                Destructive
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-border text-foreground">
                Outline
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-chart-2 text-background">
                Success
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-chart-3 text-background">
                Warning
              </span>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h3 className="text-lg font-medium text-foreground">Cards</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-secondary border border-border rounded-lg p-4">
                <h4 className="text-sm font-medium text-foreground mb-1">Basic Card</h4>
                <p className="text-sm text-muted-foreground">
                  A simple card component with padding and border.
                </p>
              </div>
              <div className="bg-secondary border border-border rounded-lg p-4 hover:border-muted-foreground transition-colors cursor-pointer">
                <h4 className="text-sm font-medium text-foreground mb-1">Interactive Card</h4>
                <p className="text-sm text-muted-foreground">
                  Hover over this card to see the border highlight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
