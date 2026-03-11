"use client"

import { useState } from "react"
import {
  Leaf,
  Sprout,
  TreeDeciduous,
  Flower2,
  Sun,
  Moon,
  Wind,
  Droplets,
  Flame,
  Sparkles,
  Eye,
  Focus,
  Scan,
  Camera,
  Globe,
  Map,
  Compass,
  Bell,
  Settings,
  Search,
  Menu,
  X,
  Plus,
  Minus,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  Check,
  AlertCircle,
  Info,
  Heart,
  Star,
  Zap,
  RefreshCw,
  Share,
  Download,
  Upload,
  type LucideIcon,
} from "lucide-react"

interface IconItem {
  name: string
  icon: LucideIcon
  category: string
}

const icons: IconItem[] = [
  { name: "Leaf", icon: Leaf, category: "Nature" },
  { name: "Sprout", icon: Sprout, category: "Nature" },
  { name: "TreeDeciduous", icon: TreeDeciduous, category: "Nature" },
  { name: "Flower2", icon: Flower2, category: "Nature" },
  { name: "Sun", icon: Sun, category: "Nature" },
  { name: "Moon", icon: Moon, category: "Nature" },
  { name: "Wind", icon: Wind, category: "Nature" },
  { name: "Droplets", icon: Droplets, category: "Nature" },
  { name: "Flame", icon: Flame, category: "Action" },
  { name: "Sparkles", icon: Sparkles, category: "Action" },
  { name: "Eye", icon: Eye, category: "Awareness" },
  { name: "Focus", icon: Focus, category: "Awareness" },
  { name: "Scan", icon: Scan, category: "Awareness" },
  { name: "Camera", icon: Camera, category: "Awareness" },
  { name: "Globe", icon: Globe, category: "World" },
  { name: "Map", icon: Map, category: "World" },
  { name: "Compass", icon: Compass, category: "World" },
  { name: "Bell", icon: Bell, category: "System" },
  { name: "Settings", icon: Settings, category: "System" },
  { name: "Search", icon: Search, category: "Action" },
  { name: "Menu", icon: Menu, category: "Navigation" },
  { name: "X", icon: X, category: "Action" },
  { name: "Plus", icon: Plus, category: "Action" },
  { name: "Minus", icon: Minus, category: "Action" },
  { name: "ChevronRight", icon: ChevronRight, category: "Navigation" },
  { name: "ChevronDown", icon: ChevronDown, category: "Navigation" },
  { name: "ArrowRight", icon: ArrowRight, category: "Navigation" },
  { name: "ArrowLeft", icon: ArrowLeft, category: "Navigation" },
  { name: "Check", icon: Check, category: "Status" },
  { name: "AlertCircle", icon: AlertCircle, category: "Status" },
  { name: "Info", icon: Info, category: "Status" },
  { name: "Heart", icon: Heart, category: "Action" },
  { name: "Star", icon: Star, category: "Action" },
  { name: "Zap", icon: Zap, category: "Action" },
  { name: "RefreshCw", icon: RefreshCw, category: "Action" },
  { name: "Share", icon: Share, category: "Action" },
  { name: "Download", icon: Download, category: "Action" },
  { name: "Upload", icon: Upload, category: "Action" },
]

const iconSizes = [
  { name: "xs", size: 12 },
  { name: "sm", size: 16 },
  { name: "md", size: 20 },
  { name: "lg", size: 24 },
  { name: "xl", size: 32 },
]

export function IconsSection() {
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null)

  const handleCopyIcon = (name: string) => {
    navigator.clipboard.writeText(`<${name} />`)
    setCopiedIcon(name)
    setTimeout(() => setCopiedIcon(null), 2000)
  }

  return (
    <section id="icons" className="scroll-mt-8">
      <div className="mb-8">
        <h2 className="text-2xl font-light text-foreground mb-2">Icons</h2>
        <p className="text-muted-foreground max-w-2xl">
          Thoughtfully selected icons from Lucide React. Each serves a purpose. Click to copy component name.
        </p>
      </div>

      <div className="space-y-12">
        <div>
          <h3 className="text-lg font-medium text-foreground mb-6">Icon Library</h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-2">
            {icons.map(({ name, icon: Icon }) => (
              <button
                key={name}
                onClick={() => handleCopyIcon(name)}
                className="group aspect-square flex flex-col items-center justify-center p-3 rounded-lg border border-border bg-card hover:bg-accent transition-colors"
                title={name}
              >
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                {copiedIcon === name && (
                  <span className="absolute text-xs text-foreground bg-secondary px-2 py-1 rounded -mt-12">
                    Copied!
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-foreground mb-6">Icon Sizes</h3>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-end gap-8">
              {iconSizes.map((size) => (
                <div key={size.name} className="flex flex-col items-center gap-3">
                  <Leaf style={{ width: size.size, height: size.size }} className="text-primary" />
                  <div className="text-center">
                    <p className="text-sm text-foreground">{size.name}</p>
                    <p className="text-xs text-muted-foreground font-mono">{size.size}px</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-medium text-foreground mb-4">Usage</h3>
          <pre className="bg-secondary rounded-md p-4 overflow-x-auto">
            <code className="text-sm font-mono text-foreground">
{`import { Settings, Bell, Search } from "lucide-react"

// Default size (24px)
<Settings />

// Custom size
<Settings className="w-4 h-4" />
<Settings className="w-5 h-5" />
<Settings className="w-6 h-6" />

// With color
<Settings className="text-muted-foreground" />
<Settings className="text-primary" />`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}
