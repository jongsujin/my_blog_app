import Editor from "../components/ui/Editor";

export default function WritePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <div className="mx-auto max-w-4xl p-6 md:p-8 ">
                <input type="text" placeholder="제목을 입력하세요..." className="w-full border border-gray-300 p-2 mb-4 bg-transparent text-black focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <Editor />
            </div>
        </div>
    )
}