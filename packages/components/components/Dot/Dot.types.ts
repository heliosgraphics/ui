import type { HeliosColors, HeliosAttributeMeta } from "../.."

export interface DotProps {
	color: HeliosColors
	colorAccent?: HeliosColors
	size: number
}

export const meta: HeliosAttributeMeta<DotProps> = {
	_status: "stable",
	_type: "core",
	color: {
		type: "HeliosColors",
		default: "blue",
	},
	colorAccent: {
		type: "HeliosColors",
		isOptional: true,
	},
	size: {
		type: "number",
		default: 8,
	},
}
