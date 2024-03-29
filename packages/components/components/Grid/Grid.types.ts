import type { HeliosChildrenType, HeliosAttributeMeta } from "../.."

export interface GridProps {
	columns: number
	children: HeliosChildrenType
	isResponsive?: boolean
}

export const meta: HeliosAttributeMeta<GridProps> = {
	columns: {
		type: "number",
	},
	children: {
		type: "HeliosChildrenType",
	},
	isResponsive: {
		type: "boolean",
		isOptional: true,
	},
}
