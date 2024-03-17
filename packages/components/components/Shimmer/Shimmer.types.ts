import type { HeliosAttributeMeta } from "../.."

export interface ShimmerProps {
	height: number
	isRounded?: boolean
	paddingTop?: number
	paddingBottom?: number
	width: number
}

export const meta: HeliosAttributeMeta<ShimmerProps> = {
	height: {
		type: "number",
	},
	isRounded: {
		type: "boolean",
		isOptional: true,
	},
	paddingTop: {
		type: "number",
		isOptional: true,
	},
	paddingBottom: {
		type: "number",
		isOptional: true,
	},
	width: {
		type: "number",
	},
}
