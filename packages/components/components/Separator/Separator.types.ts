import type { HeliosAttributeMeta } from "../.."

export interface SeparatorProps {
	className?: string
	height?: number
	isLight?: boolean
	isTransparent?: boolean
	isVertical?: boolean
}

export const meta: HeliosAttributeMeta<SeparatorProps> = {
	className: {
		type: "string",
		isOptional: true,
	},
	height: {
		type: "number",
		isOptional: true,
	},
	isLight: {
		type: "boolean",
		isOptional: true,
	},
	isTransparent: {
		type: "boolean",
		isOptional: true,
	},
	isVertical: {
		type: "boolean",
		isOptional: true,
	},
}
