"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import SocialShare from "./SocialShare"


// Define the tab data structure
type TabItem = {
  id: string
  title: string
  content: React.ReactNode
}

export default function BlogLayout() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("introduction")

  // Define the tabs and their content
  const tabs: TabItem[] = [
    {
      id: "introduction",
      title: "Introduction",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Introduction</h2>
          <p>
            Lath and plaster is a building process used to finish walls and ceilings with a wet compound. It creates a
            smooth, durable surface that&#39;s been used for centuries in construction. This traditional method offers
            superior soundproofing, fire resistance, and aesthetic appeal compared to modern drywall. When maintained
            properly, lath and plaster walls can last for generations.
          </p>
        </div>
      ),
    },
    {
      id: "superior-finish",
      title: "Superior Finish, Every Time",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Superior Finish, Every Time</h2>
          <p>
            Lath and plaster offers a distinctive, durable surface that visually separates your home. Its unique,
            hand-applied nature creates subtle variations in texture that add character and depth. For homeowners who
            value craftsmanship and are looking to preserve historical authenticity, lath and plaster is the premium
            choice. The natural materials used create a healthier indoor environment while providing your home with the
            rich character.
          </p>
        </div>
      ),
    },
    {
      id: "identifying-problems",
      title: "Identifying and Preventing Future Problems",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Identifying and Preventing Future Problems</h2>
          <p>
            A proper wall evaluation system doesn&#39;t just look great – it protects your home. Regular inspection of your
            plaster surfaces can identify early signs of moisture damage, settling cracks, or separation from the lath
            backing. Catching these issues early prevents costly repairs down the line and preserves the structural
            integrity of your walls.
          </p>
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Common Issues:</h3>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                <span className="font-medium">Moisture Intrusion:</span> Water damage behind surfaces can cause major
                damage
              </li>
              <li>
                <span className="font-medium">Structural Shifts:</span> Small movements in foundations can create cracks
              </li>
              <li>
                <span className="font-medium">Improper Repairs:</span> Poor patch-work can actually worsen existing
                problems
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "smart-choice",
      title: "Lath & Plaster: The Smart Choice",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Lath & Plaster: The Smart Choice</h2>
          <div className="my-4">
            <Image
              src="/placeholder.svg?height=300&width=500"
              width={500}
              height={300}
              alt="Professional applying plaster to a wall"
              className="rounded-lg w-full object-cover"
            />
          </div>
          <p>
            While other finishes may seem quicker, they often can&#39;t match the long-term benefits of properly installed
            lath and plaster:
          </p>
          <div className="mt-4 space-y-3">
            <div>
              <h3 className="font-semibold">Better Insulation:</h3>
              <p>Keeps your home cooler in summer, warmer in winter</p>
            </div>
            <div>
              <h3 className="font-semibold">Customizable Design:</h3>
              <p>Allows for custom textures, finishes, and architectural details</p>
            </div>
            <div>
              <h3 className="font-semibold">Incredible Longevity:</h3>
              <p>
                With proper care, lath and plaster can last generations, while drywall systems typically last around 30
                years before needing replacement
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "plastering-advantage",
      title: "The Jimerson Plastering Advantage",
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">The Jimerson Plastering Advantage</h2>
          <p>
            Our experienced team brings decades of expertise to every project. We use only the highest quality materials
            and time-tested techniques to ensure your project is not only beautiful but also protected for years to
            come.
          </p>
          <p>
            We take pride in providing work that&#39;s as beautiful as it is lasting – when you hire Jimerson Plastering,
            you&#39;re investing in craftsmanship that stands the test of time.
          </p>
        </div>
      ),
    },
  ]

  // Find the active tab content
  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Lath & Plaster: Lasting Beauty and Strength for Your Home
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl">
          Discover a traditional building method that combines durability with elegant aesthetics. Lath and plaster has
          been used for centuries to create smooth, durable walls that stand the test of time. Learn why homeowners and
          builders alike appreciate this classic technique.
        </p>
      </div>

      {/* Main content with tabs */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side - Table of Contents / Tabs */}
        <div className="md:w-1/3 lg:w-1/4">
          <div className="sticky top-4">
            <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
            <nav className="flex flex-col space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center text-left px-3 py-2 rounded-md transition-colors",
                    activeTab === tab.id ? "bg-gray-100 text-gray-900 font-medium" : "text-gray-600 hover:bg-gray-50",
                  )}
                >
                  <span className="flex-1">{tab.title}</span>
                  <ChevronRight
                    className={cn("h-4 w-4 transition-transform", activeTab === tab.id ? "transform rotate-90" : "")}
                  />
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="md:w-2/3 lg:w-3/4">
          <div className="prose max-w-none">{activeContent}</div>

          {/* Social Share */}
          <div className="mt-12 pt-6 border-t">
            <h3 className="text-lg font-medium mb-4">Share This Service</h3>
            <SocialShare />
          </div>
        </div>
      </div>
    </div>
  )
}
