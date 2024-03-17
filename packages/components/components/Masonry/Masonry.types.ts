import type { HeliosAttributeMeta, HeliosChildrenType } from "../.."

export interface MasonryProps {
	children: HeliosChildrenType
}

export const meta: HeliosAttributeMeta<MasonryProps> = {
	children: {
		type: "HeliosChildrenType",
	},
}
