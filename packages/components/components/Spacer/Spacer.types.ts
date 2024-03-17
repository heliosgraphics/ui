import type { HeliosAttributeMeta } from "../.."

export interface SpacerProps {
	gap: number
}

export const meta: HeliosAttributeMeta<SpacerProps> = {
	gap: {
		type: "number"
	}
}
