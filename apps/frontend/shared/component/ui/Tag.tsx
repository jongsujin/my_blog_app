export function Tag({ tag }: { tag: string }) {
    return (
        <div className="inline-flex items-center rounded-lg bg-primary-gradient text-white border border-blue-300 px-2 py-1 text-sm font-medium transition-colors hover:text-blue-400">
            <span>{tag}</span>
        </div>
    )
}