import type { HeliosChildrenType, HeliosAttributeMeta } from "../.."

export interface ButtonGroupProps {
	align?: "left" | "center" | "right" | "join"
	className?: string
	children: HeliosChildrenType
	isVertical?: boolean
}

export const meta: HeliosAttributeMeta<ButtonGroupProps> = {
	align: {
		type: '"left" | "center" | "right" | "join"',
		isOptional: true,
		default: "left",
	},
	className: {
		type: "string",
		isOptional: true,
	},
	children: {
		type: "HeliosChildrenType",
	},
	isVertical: {
		type: "boolean",
		isOptional: true,
	},
}
