"use client"

import Link from "next/link"
import { CircleIcon, Moon, Sun } from 'lucide-react'
import { HEADER_TAB_LIST } from "@/config/constants"
import { usePathname } from "next/navigation"
import { useState } from "react"


export function Header() {
  const pathname = usePathname()
  const [theme, setTheme] = useState<'light' | 'dark'>('light')



  return (
    <header className="sticky top-0 z-50 w-full bg-backgroundColor bg-opacity-90 border-b border-white transition-opacity duration-300">
      <div className="container flex items-center h-16 justify-between space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2 ml-5">
            <CircleIcon className="h-6 w-6 text-white" />
            <div className="text-white ml-1">
              <p>Fanta Jin</p>
            </div>
          </Link>
        </div>
        <nav className="flex items-center space-x-6">
          {HEADER_TAB_LIST.map((header) => (
            <Link
              href={header.href}
              key={header.id}
              className={`text-sm font-medium transition-colors hover:text-hoverColor
               ${pathname === header.href
                  ? 'text-white border-b-2 border-white'
                  : 'text-textColor'
                }`}
            >
              {header.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => { }}
            className="rounded-lg p-2 hover:bg-hoverColor"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5 text-textColor" />
            ) : (
              <Sun className="h-5 w-5 text-textColor" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}