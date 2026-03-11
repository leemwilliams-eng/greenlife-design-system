"use client"

import { cn } from "@/lib/utils"

interface NavItem {
  label: string
  href: string
  isActive?: boolean
}

interface NavSection {
  title: string
  items: NavItem[]
}

const navSections: NavSection[] = [
  {
    title: "Foundations",
    items: [
      { label: "Introduction", href: "#introduction" },
      { label: "Colors", href: "#colors" },
      { label: "Typography", href: "#typography" },
    ],
  },
  {
    title: "Elements",
    items: [
      { label: "Icons", href: "#icons" },
      { label: "Components", href: "#components" },
      { label: "Layout & Grid", href: "#layout" },
    ],
  },
]

export function SidebarNav({
  activeSection,
  onNavigate,
}: {
  activeSection: string
  onNavigate: (section: string) => void
}) {
  return (
    <aside className="hidden lg:flex flex-col w-64 border-r border-border bg-sidebar min-h-screen p-6">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-8 h-8 rounded-md bg-foreground flex items-center justify-center">
          <span className="text-background font-bold text-sm">DS</span>
        </div>
        <span className="font-semibold text-foreground">Design System</span>
      </div>

      <nav className="flex-1 space-y-8">
        {navSections.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => onNavigate(item.href.replace("#", ""))}
                    className={cn(
                      "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                      activeSection === item.href.replace("#", "")
                        ? "bg-accent text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
