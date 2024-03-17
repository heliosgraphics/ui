import type { HeliosChildrenType, HeliosAttributeMeta } from "../.."

export interface TableProps {
	children: HeliosChildrenType
	hasBorder?: boolean
}

export const meta: HeliosAttributeMeta<TableProps> = {
	children: {
		type: "HeliosChildrenType",
	},
	hasBorder: {
		type: "boolean",
		isOptional: true,
	},
}
