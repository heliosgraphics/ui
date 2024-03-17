import type { HeliosAttributeMeta } from "../.."

export interface ProgressProps {
	max: number
	value: number
}

export const meta: HeliosAttributeMeta<ProgressProps> = {
	max: {
		type: "number",
	},
	value: {
		type: "number",
	},
}
