import type { HeliosChildrenType, HeliosAttributeMeta } from "../.."

export interface TableProps {
	children: HeliosChildrenType
	hasBorder?: boolean
	isMonoHeader?: boolean
}

export const meta: HeliosAttributeMeta<TableProps> = {
	_status: "nominal",
	_type: "content",
	children: {
		type: "HeliosChildrenType",
	},
	hasBorder: {
		type: "boolean",
		isOptional: true,
	},
	isMonoHeader: {
		type: "boolean",
		isOptional: true,
	},
}
