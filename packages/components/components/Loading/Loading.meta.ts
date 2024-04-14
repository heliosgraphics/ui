import type { HeliosAttributeMeta } from "../.."
import type { LoadingProps } from "./Loading.types"

export const meta: HeliosAttributeMeta<LoadingProps> = {
	_status: "stable",
	_type: "core",
	className: { type: "string", isOptional: true },
	size: { type: "10 | 20 | 40" },
	emphasis: {
		type: "HeliosEmphasisType",
		isOptional: true,
	},
}
