import type { HeliosAttributeMeta } from "../.."
import type { ShimmerProps } from "./Shimmer.types"

export const meta: HeliosAttributeMeta<ShimmerProps> = {
	_status: "stable",
	_type: "pattern",
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
