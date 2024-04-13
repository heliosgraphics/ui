import type { HeliosAttributeMeta } from "../.."
import type { ProgressProps } from "./Progress.types"

export const meta: HeliosAttributeMeta<ProgressProps> = {
	_status: "stable",
	_type: "core",
	max: {
		type: "number",
		default: 100,
	},
	value: {
		type: "number",
		default: 0,
	},
}
