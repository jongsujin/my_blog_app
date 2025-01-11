export function Tag({ tag }: { tag: string }) {
    return (
        <div className="inline-flex items-center rounded-lg bg-primary-gradient text-white border border-borderColor px-2 py-1 text-sm font-medium transition-colors hover:border-hoverColor hover:text-hoverColor">
            <span>{tag}</span>
        </div>
    )
}