import { ButtonProps } from "@/types/button";



export default function Button({ content, onClick }: ButtonProps) {
    return (
        <button className="bg-cardColor border border-borderColor text-sm text-textColor p-2 rounded hover:border-hoverColor hover:text-hoverColor transition-colors duration-300" onClick={onClick}>{content}</button>
    )
}