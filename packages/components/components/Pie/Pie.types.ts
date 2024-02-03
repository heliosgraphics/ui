import type { FUIColors } from "@heliosgraphics/library/types/colors"

export interface PieItem {
	color: FUIColors
	name?: string
	value: number
}

export interface PieProps {
	size: number
	data: Array<PieItem>
}
