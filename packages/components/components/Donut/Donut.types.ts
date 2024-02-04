import type { ReactNode } from "react"
import { FUIColors } from "@heliosgraphics/library/types/colors"

export type DonutSizeType = 32 | 48 | 64 | 96 | 128

export interface DonutProps {
	children?: ReactNode
	color: FUIColors
	percentage: number
	size: DonutSizeType
}
