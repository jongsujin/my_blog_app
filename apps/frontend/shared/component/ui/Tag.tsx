export function Tag({ tag }: { tag: string }) {
  return (
    <div className="border-borderColor inline-flex cursor-pointer items-center rounded-lg border bg-primary-gradient px-2 py-1 text-sm font-medium text-textColor text-white transition-colors hover:border-hoverColor hover:text-hoverColor">
      <span>{tag}</span>
    </div>
  )
}
