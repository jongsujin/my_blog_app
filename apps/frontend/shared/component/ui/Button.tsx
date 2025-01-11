import { ButtonProps } from "@/types/button";



export default function Button({ content }: ButtonProps) {
    return (
        <button className="bg-white border border-blue-500 text-blue-300 p-2 rounded hover:bg-blue-300 hover:text-white transition-colors duration-300">{content}</button>
    )
}