import type { ReactNode } from "react"

export type DonutSizeType = 32 | 48 | 64 | 96 | 128

export interface DonutProps {
	children?: ReactNode
	color: string
	percentage: number
	size: DonutSizeType
}
