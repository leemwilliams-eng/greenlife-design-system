"use client"

import { useState } from "react"
import {
  Grid3X3,
  ExternalLink,
  BarChart3,
  Power,
  Globe,
  Flag,
  Bell,
  Settings,
  Moon,
  Image,
  Pencil,
  File,
  Copy,
  Paperclip,
  Key,
  FileText,
  Ship,
  Scissors,
  Command,
  SlidersHorizontal,
  Tv2,
  CreditCard,
  Layers,
  AlertCircle,
  CheckCircle,
  XCircle,
  Info,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  Search,
  Menu,
  X,
  ArrowRight,
  ArrowLeft,
  Download,
  Upload,
  Trash2,
  Edit,
  Eye,
  EyeOff,
  type LucideIcon,
} from "lucide-react"

interface IconItem {
  name: string
  icon: LucideIcon
  category: string
}

const icons: IconItem[] = [
  { name: "Grid3X3", icon: Grid3X3, category: "Layout" },
  { name: "ExternalLink", icon: ExternalLink, category: "Navigation" },
  { name: "BarChart3", icon: BarChart3, category: "Data" },
  { name: "Power", icon: Power, category: "System" },
  { name: "Globe", icon: Globe, category: "General" },
  { name: "Flag", icon: Flag, category: "General" },
  { name: "Bell", icon: Bell, category: "Notification" },
  { name: "Settings", icon: Settings, category: "System" },
  { name: "Moon", icon: Moon, category: "System" },
  { name: "Image", icon: Image, category: "Media" },
  { name: "Pencil", icon: Pencil, category: "Action" },
  { name: "File", icon: File, category: "File" },
  { name: "Copy", icon: Copy, category: "Action" },
  { name: "Paperclip", icon: Paperclip, category: "General" },
  { name: "Key", icon: Key, category: "Security" },
  { name: "FileText", icon: FileText, category: "File" },
  { name: "Ship", icon: Ship, category: "General" },
  { name: "Scissors", icon: Scissors, category: "Action" },
  { name: "Command", icon: Command, category: "System" },
  { name: "SlidersHorizontal", icon: SlidersHorizontal, category: "Action" },
  { name: "Tv2", icon: Tv2, category: "Media" },
  { name: "CreditCard", icon: CreditCard, category: "Commerce" },
  { name: "Layers", icon: Layers, category: "Layout" },
  { name: "AlertCircle", icon: AlertCircle, category: "Status" },
  { name: "CheckCircle", icon: CheckCircle, category: "Status" },
  { name: "XCircle", icon: XCircle, category: "Status" },
  { name: "Info", icon: Info, category: "Status" },
  { name: "ChevronRight", icon: ChevronRight, category: "Navigation" },
  { name: "ChevronDown", icon: ChevronDown, category: "Navigation" },
  { name: "Plus", icon: Plus, category: "Action" },
  { name: "Minus", icon: Minus, category: "Action" },
  { name: "Search", icon: Search, category: "Action" },
  { name: "Menu", icon: Menu, category: "Navigation" },
  { name: "X", icon: X, category: "Action" },
  { name: "ArrowRight", icon: ArrowRight, category: "Navigation" },
  { name: "ArrowLeft", icon: ArrowLeft, category: "Navigation" },
  { name: "Download", icon: Download, category: "Action" },
  { name: "Upload", icon: Upload, category: "Action" },
  { name: "Trash2", icon: Trash2, category: "Action" },
  { name: "Edit", icon: Edit, category: "Action" },
  { name: "Eye", icon: Eye, category: "Action" },
  { name: "EyeOff", icon: EyeOff, category: "Action" },
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
        <h2 className="text-2xl font-semibold text-foreground mb-2">Icons</h2>
        <p className="text-muted-foreground max-w-2xl">
          Icon set powered by Lucide React. Click any icon to copy its component name.
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
                  <Settings style={{ width: size.size, height: size.size }} className="text-foreground" />
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
