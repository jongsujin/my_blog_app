"use client"

import Link from "next/link"
import { CircleIcon } from 'lucide-react'
import { HEADER_TAB_LIST } from "@/config/constants"
import { usePathname } from "next/navigation"


export function  Header() {


  const pathname = usePathname()
  return (
   <header className="sticky top-0 z-50 w-full border-b bg-white">
     <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
       <div className="flex items-center space-x-4">
         <Link href="/" className="flex items-center space-x-2 ml-5">
           <CircleIcon className="h-6 w-6 text-blue-300" />
           <div className="text-blue-300">
             <p>Fanta Jin</p>
           </div>
         </Link>
       </div>
       <nav className="flex items-center space-x-6">
         {HEADER_TAB_LIST.map((header) => (
           <Link
             href={header.href}
             key={header.id}
             className={`text-sm font-medium transition-colors hover:text-blue-400
               ${pathname === header.href 
                 ? 'text-blue-500 border-b-2 border-blue-500' 
                 : 'text-blue-300'
               }`}
           >
             {header.title}
           </Link>
         ))}
       </nav>
     </div>
   </header>
 )
}