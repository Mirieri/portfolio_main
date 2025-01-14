"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, FolderGit2, User } from 'lucide-react'
import SocialIcons from "./social-icons"
import LanguageSwitcher from "./language-switcher"

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-[280px] border-r p-8 flex flex-col">
      <div className="relative w-32 h-32 rounded-full overflow-hidden bg-[#000066]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dDkbZSwiTKhE7igyGicAcK4kXeprSy.png"
          alt="Profile"
          width={128}
          height={128}
          className="object-cover"
        />
      </div>

      <nav className="mt-12 flex-1">
        <ul className="space-y-4">
          <li>
            <Link
              href="/"
              className={`nav-link font-black ${pathname === "/" ? "active" : ""}`}
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`nav-link font-black ${pathname === "/projects" ? "active" : ""}`}
            >
              <FolderGit2 size={20} />
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`nav-link font-black ${pathname === "/about" ? "active" : ""}`}
            >
              <User size={20} />
              <span>About Me</span>
            </Link>
          </li>
        </ul>
      </nav>

      <LanguageSwitcher />
      <SocialIcons />
    </aside>
  )
}

