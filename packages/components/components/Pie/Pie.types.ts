import type { HeliosColors, HeliosAttributeMeta } from "../.."

export interface PieItem {
	name?: string
	value: number
}

export interface PieProps {
	color: HeliosColors
	data: Array<PieItem>
	size: number
}

export const meta: HeliosAttributeMeta<PieProps> = {
	color: {
		type: "HeliosColors",
	},
	data: {
		type: "Array<PieItem>",
	},
	size: {
		type: "number",
	},
}
