import type { HeliosAttributeMeta } from "../.."

export interface SpacerProps {
	gap: number
}

export const meta: HeliosAttributeMeta<SpacerProps> = {
	_status: "stable",
	_type: "layout",
	gap: {
		type: "number",
	},
}
