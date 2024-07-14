import type { HeliosAttributeMeta } from "../.."
import type { ProgressProps } from "./Progress.types"

export const meta: HeliosAttributeMeta<ProgressProps> = {
	_patterns: [
		{
			id: "ui-progress-default",
			description: "default",
			content: `<Progress max={100} value={PERCENTAGE} />`,
		},
	],
	_status: "nominal",
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
