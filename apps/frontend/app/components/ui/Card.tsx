import { CardProps } from '@/types/card'
import React from 'react'



export function Card({ className = '', children }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {children}
    </div>
  )
}

export function CardContent({ className = '', children }: CardProps) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  )
}
