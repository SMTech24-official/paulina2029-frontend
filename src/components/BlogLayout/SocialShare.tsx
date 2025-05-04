import { Facebook, Linkedin, Twitter, Share2 } from "lucide-react"

export default function SocialShare() {
  return (
    <div className="flex space-x-3">
      <button
        aria-label="Share on Facebook"
        className="h-10 w-10 flex items-center justify-center rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
      >
        <Facebook className="h-5 w-5" />
      </button>
      <button
        aria-label="Share on LinkedIn"
        className="h-10 w-10 flex items-center justify-center rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
      >
        <Linkedin className="h-5 w-5" />
      </button>
      <button
        aria-label="Share on Twitter"
        className="h-10 w-10 flex items-center justify-center rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
      >
        <Twitter className="h-5 w-5" />
      </button>
      <button
        aria-label="Share via WhatsApp"
        className="h-10 w-10 flex items-center justify-center rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
      >
        <Share2 className="h-5 w-5" />
      </button>
    </div>
  )
}
