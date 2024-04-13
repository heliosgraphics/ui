import type { HeliosAttributeMeta } from "../.."
import type { ColumnBaseProps } from "./Column.types"

export const meta: HeliosAttributeMeta<ColumnBaseProps> = {
	_status: "stable",
	_type: "layout",
	_extends: ["FlexProps"],
	isColumnCentered: {
		type: "boolean",
		isOptional: true,
	},
	width: {
		type: "number",
	},
}
