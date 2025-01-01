import { PASTEL_GRADIENTS } from "@/config/constants"

export interface Post {
  id: number
  title: string
  date: string
  description: string
  gradient: string
  image: string
  content: string
  tags: string[]
}


export type PastelGradient = keyof typeof PASTEL_GRADIENTS
