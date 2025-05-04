"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function ReviewForm() {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted")
  }

  return (
    <Card className="w-full max-w-2xl mx-auto md:my-20 my-12 rounded-[24px] border-[4px] border-[#E6F4EC] bg-[#FFF] shadow-[0px_4px_40px_0px_rgba(83,_83,_83,_0.06)]">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Leave a Review About Our Service</CardTitle>
        <p className="text-sm text-muted-foreground">Your email address will not be published</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <div className="text-sm">Your rating:</div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="p-1"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                >
                  <Star
                    className={`h-5 w-5 ${
                      star <= (hoveredRating || rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <Input placeholder="Name" className="bg-gray-100 border-0" required />

          <Input placeholder="Title" className="bg-gray-100 border-0" required />

          <Input type="email" placeholder="Email Address" className="bg-gray-100 border-0" required />

          <Textarea placeholder="Write your comment" className="bg-gray-100 border-0 min-h-[100px]" required />

          <Button type="submit" >
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
