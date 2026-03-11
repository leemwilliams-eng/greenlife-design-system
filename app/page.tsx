"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { SidebarNav } from "@/components/design-system/sidebar-nav"
import { IntroductionSection } from "@/components/design-system/introduction-section"
import { ColorsSection } from "@/components/design-system/colors-section"
import { TypographySection } from "@/components/design-system/typography-section"
import { IconsSection } from "@/components/design-system/icons-section"
import { ComponentsSection } from "@/components/design-system/components-section"
import { LayoutSection } from "@/components/design-system/layout-section"

export default function DesignSystemPage() {
  const [activeSection, setActiveSection] = useState("introduction")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavigate = (section: string) => {
    setActiveSection(section)
    setMobileMenuOpen(false)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <SidebarNav activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-foreground flex items-center justify-center">
              <span className="text-background font-bold text-sm">DS</span>
            </div>
            <span className="font-semibold text-foreground">Design System</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-muted-foreground hover:text-foreground"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="bg-background border-b border-border p-4">
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Foundations
                </h3>
                <ul className="space-y-1">
                  {["introduction", "colors", "typography"].map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => handleNavigate(item)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm capitalize ${
                          activeSection === item
                            ? "bg-accent text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  Elements
                </h3>
                <ul className="space-y-1">
                  {["icons", "components", "layout"].map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => handleNavigate(item)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm capitalize ${
                          activeSection === item
                            ? "bg-accent text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {item === "layout" ? "Layout & Grid" : item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        )}
      </div>

      {/* Main Content */}
      <main className="flex-1 lg:pl-0 pt-16 lg:pt-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
          <div className="space-y-24">
            <IntroductionSection />
            <ColorsSection />
            <TypographySection />
            <IconsSection />
            <ComponentsSection />
            <LayoutSection />
          </div>

          {/* Footer */}
          <footer className="mt-24 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              Design System Style Guide
            </p>
          </footer>
        </div>
      </main>
    </div>
  )
}
