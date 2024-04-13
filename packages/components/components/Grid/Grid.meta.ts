import type { HeliosAttributeMeta } from "../.."
import type { GridProps } from "./Grid.types"

export const meta: HeliosAttributeMeta<GridProps> = {
	_status: "experimental",
	_type: "core",
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
