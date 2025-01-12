"use client"

import dynamic from "next/dynamic";
import { useMemo } from "react"
import 'react-quill-new/dist/quill.snow.css';

interface EditorProps {
    value: string;
    onChange: (value: string) => void;
}

const ReactQuill = dynamic(() => import('react-quill-new'), {
    ssr: false,
    loading: () => <p>Loading...</p>
})


export default function Editor({ value, onChange }: EditorProps) {
    const modules = useMemo(() => ({
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['image', 'link'],
            ['clean']
        ]
    }), [])

    return (
        <div className="text-textColor h-96">
            <ReactQuill
                theme="snow"
                modules={modules}
                value={value}
                onChange={onChange}
                className="text-textColor [&_.ql-editor]:text-textColor h-full [&_.ql-container]:h-[calc(100%-42px)]"
            />
        </div>
    )
}