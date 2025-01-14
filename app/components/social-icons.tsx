import Link from "next/link"
import { Instagram, Linkedin, TwitterIcon as TikTok, Palette } from 'lucide-react'

export default function SocialIcons() {
  return (
    <div className="flex gap-6">
      <Link href="https://instagram.com" className="text-gray-600 hover:text-[#000066]">
        <Instagram size={24} />
      </Link>
      <Link href="https://linkedin.com" className="text-gray-600 hover:text-[#000066]">
        <Linkedin size={24} />
      </Link>
      <Link href="https://tiktok.com" className="text-gray-600 hover:text-[#000066]">
        <TikTok size={24} />
      </Link>
      <Link href="https://behance.net" className="text-gray-600 hover:text-[#000066]">
        <Palette size={24} />
      </Link>
    </div>
  )
}

