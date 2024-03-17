import type { HeliosAttributeMeta } from "../.."

export interface ProgressProps {
	max: number
	value: number
}

export const meta: HeliosAttributeMeta<ProgressProps> = {
	max: {
		type: "number",
		default: 100
	},
	value: {
		type: "number",
		default: 0
	},
}
