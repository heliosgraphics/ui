import type { HeliosColors, HeliosChildrenType } from "../.."

export type DonutSizeType = 32 | 48 | 64 | 96 | 128

export interface DonutProps {
	children?: HeliosChildrenType
	color: HeliosColors
	percentage: number
	size: DonutSizeType
}
