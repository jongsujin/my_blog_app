export function Tag({ tag }: { tag: string }) {
    return (
        <div className="inline-flex items-center rounded-lg bg-blue-200 px-2 py-1 text-sm font-medium text-white transition-colors hover:text-blue-400">
            <span>{tag}</span>
        </div>
    )
}