"use client"

import Select, { Theme } from "react-select"

export default function DropDown() {
    const options = [
        { value: 'latest', label: '최신순' },
        { value: 'oldest', label: '오래된순' },
        { value: 'popular', label: '인기순' }
    ]

    const customTheme = (theme: Theme) => ({
        ...theme,
        colors: {
            ...theme.colors,
            neutral0: '#2a2a2a',     // 배경색
            neutral80: '#e5e7eb',    // 메인 텍스트 색상
            neutral50: '#e5e7eb',    // 플레이스홀더 텍스트 색상
            neutral20: '#2a2a2a',    // 보더 색상
            neutral30: '#2a2a2a',    // 호버 시 보더 색상
            primary: '#93c5fd',      // 선택된 항목 배경색
            primary25: '#93c5fd',    // 호버 시 배경색
            primary50: '#93c5fd',    // 클릭 시 배경색
            primary75: '#93c5fd',    // 활성 배경색
        },
    })

    return (
        <Select
            options={options}
            theme={customTheme}
            placeholder="Tags..."
            className="w-40"
            defaultValue={options[0]}
            isSearchable={false}
            isClearable={true}
        />
    )
}