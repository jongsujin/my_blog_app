'use client'

import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import 'react-quill-new/dist/quill.snow.css'
import { imageHandler } from '@/util/imageHandler'

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
          // toolbar 내부에 handlers 추가
          image: imageHandler,
        },
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
        className="h-full text-textColor [&_.ql-container]:h-[calc(100%-42px)] [&_.ql-editor]:text-textColor"
      />
    </div>
  )
}
