import { CardProps } from '@/types/card'
import React from 'react'



export function Card({ className = '', children }: CardProps) {
  return (
    <div className={`border border-backgroundColor rounded-lg shadow-lg overflow-hidden ${className}`}>
      {children}
    </div>
  )
}

export function CardContent({ className = '', children }: CardProps) {
  return (
    <div className={`overflow-hidden p-6 bg-cardColor border border-backgroundColor shadow-lg ${className}`}>
      {children}
    </div>
  )
}
