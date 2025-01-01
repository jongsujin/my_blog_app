"use client"

import { useMemo, useState } from "react"
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';


export default function Editor() {
    const [value, setValue] = useState('');
    const modules = useMemo(() => ({
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'color': [] }, { 'background': [] }],  // 글자 색상과 배경색 옵션 추가
            [{ 'font': [] }],  // 폰트 옵션 추가
            [{ 'align': [] }],  // 정렬 옵션 추가
            ['image', 'link'],  // 이미지와 링크 옵션 추가
            ['clean']  // 서식 제거 옵션
        ]
    }), [])
    return (
        <div className="text-black"> {/* 텍스트 색상을 검정색으로 지정 */}

            <ReactQuill
                theme="snow"
                modules={modules}
                value={value}
                onChange={setValue}
                placeholder="내용을 입력하세요..."
                className="text-black [&_.ql-editor]:text-black"
            />
        </div>
    )
}