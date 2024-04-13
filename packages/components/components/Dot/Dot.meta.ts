import type { HeliosAttributeMeta } from "../.."
import type { DotProps } from "./Dot.types"

export const meta: HeliosAttributeMeta<DotProps> = {
	_status: "stable",
	_type: "core",
	color: {
		type: "HeliosColors",
		default: "blue",
	},
	colorAccent: {
		type: "HeliosColors",
		isOptional: true,
	},
	size: {
		type: "number",
		default: 8,
	},
}
