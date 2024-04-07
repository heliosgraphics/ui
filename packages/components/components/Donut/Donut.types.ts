import type { HeliosColors, HeliosAttributeMeta, HeliosChildrenType } from "../.."

export type DonutSizeType = 32 | 48 | 64 | 96 | 128

export interface DonutProps {
	children?: HeliosChildrenType
	color: HeliosColors
	percentage: number
	size: DonutSizeType
}

export const meta: HeliosAttributeMeta<DonutProps> = {
	_status: "stable",
	_type: "core",
	children: {
		type: "HeliosChildrenType",
		isOptional: true,
	},
	color: {
		type: "HeliosColors",
	},
	percentage: {
		type: "number",
		default: 0,
	},
	size: {
		type: "DonutSizeType",
	},
}
