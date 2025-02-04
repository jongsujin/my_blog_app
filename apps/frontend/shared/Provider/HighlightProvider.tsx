'use client'

import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import python from 'highlight.js/lib/languages/python'
import sql from 'highlight.js/lib/languages/sql'
import 'highlight.js/styles/vs2015.css'
import { useEffect } from 'react'

export function HighlightProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // highlight.js 언어 등록
    hljs.registerLanguage('javascript', javascript)
    hljs.registerLanguage('typescript', typescript)
    hljs.registerLanguage('python', python)
    hljs.registerLanguage('sql', sql)

    if (typeof window !== 'undefined') {
      window.hljs = hljs
    }
  }, [])

  return <>{children}</>
}
