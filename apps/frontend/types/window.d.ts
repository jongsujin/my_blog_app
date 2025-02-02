import { Quill } from 'react-quill-new'
import hljs from 'highlight.js'

declare global {
  interface Window {
    Quill: typeof Quill
    hljs: typeof hljs
  }
}
