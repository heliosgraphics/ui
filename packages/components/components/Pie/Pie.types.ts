import type { HeliosColors } from "../.."

export interface PieItem {
	name?: string
	value: number
}

export interface PieProps {
	color: HeliosColors
	size: number
	data: Array<PieItem>
}
