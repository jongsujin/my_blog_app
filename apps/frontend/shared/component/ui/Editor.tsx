'use client'

import { imageHandler } from '@/util/imageHandler'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import 'react-quill-new/dist/quill.snow.css'

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
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],
        ['image', 'link'],
        ['clean'],
      ],
      handlers: {
        image: imageHandler,
      },
    }),
    [],
  )

  return (
    <div className="h-96 text-textColor">
      <ReactQuill
        theme="snow"
        modules={modules}
        value={value}
        onChange={onChange}
        className="h-full text-textColor [&_.ql-container]:h-[calc(100%-42px)] [&_.ql-editor]:text-textColor"
      />
    </div>
  )
}
