"use client"

import { useMemo } from "react"
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

interface EditorProps {
    value: string;
    onChange: (value: string) => void;
}

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