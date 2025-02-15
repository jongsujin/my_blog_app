'use client'

import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import 'react-quill-new/dist/quill.snow.css'
import { Quill } from 'react-quill-new'
// import hljs from 'highlight.js'
import 'highlight.js/styles/vs2015.css'
import { ImageResize } from 'quill-image-resize-module-ts'
import { imageHandler } from '@/util/imageHandler'

// 언어 등록

// Quill 모듈 설정
const Syntax = Quill.import('modules/syntax')
Quill.register('modules/syntax', Syntax)
Quill.register('modules/ImageResize', ImageResize)

interface EditorProps {
  value: string
  onChange: (value: string) => void
}

const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

export default function Editor({ value, onChange }: EditorProps) {
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ indent: '-1' }, { indent: '+1' }],
          [{ color: [] }, { background: [] }],
          [{ font: [] }],
          [{ align: [] }],
          ['image', 'link'],
          ['clean'],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      ImageResize: {
        modules: ['Resize', 'DisplaySize'],
      },
    }),
    [],
  )

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'code-block',
    'color',
    'background',
    'font',
    'align',
    'image',
    'link',
    'list',
    'indent',
  ]

  return (
    <div className="h-96 text-textColor">
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={value}
        onChange={onChange}
        className="text-red [&_.ql-editor]:text-red h-full [&_.ql-container]:h-[calc(100%-42px)]"
      />
    </div>
  )
}
