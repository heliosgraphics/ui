import type { HeliosAttributeMeta } from "../.."
import type { TableProps } from "./Table.types"

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
