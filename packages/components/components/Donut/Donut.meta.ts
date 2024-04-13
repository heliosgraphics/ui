import type { HeliosAttributeMeta } from "../.."
import type { DonutProps } from "./Donut.types"

export const meta: HeliosAttributeMeta<DonutProps> = {
	_status: "stable",
	_type: "core",
	children: {
		type: "HeliosChildrenType",
		isOptional: true,
	},
	color: {
		type: "HeliosColors",
	},
	percentage: {
		type: "number",
		default: 0,
	},
	size: {
		type: "DonutSizeType",
	},
}
