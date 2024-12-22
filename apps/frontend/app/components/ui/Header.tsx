import Link from "next/link"
import { CircleIcon } from 'lucide-react'

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <CircleIcon className="h-6 w-6 text-blue-300" />
            </Link>
          </div>
          <nav className="flex items-center space-x-6">
            <Link
              href="/blog"
              className="text-sm font-medium text-blue-400 border-b-2 border-blue-200"
            >
              Blog
            </Link>
            <Link
              href="/documentation"
              className="text-sm font-medium text-blue-300 transition-colors hover:text-blue-400"
            >
              Documentation
            </Link>
            <Link
              href="/features"
              className="text-sm font-medium text-blue-300 transition-colors hover:text-blue-400"
            >
              Features
            </Link>
            <Link
              href="/examples"
              className="text-sm font-medium text-blue-300 transition-colors hover:text-blue-400"
            >
              Examples
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-blue-300 transition-colors hover:text-blue-400"
            >
              About
            </Link>
          </nav>
        </div>
      </header>
    )
}