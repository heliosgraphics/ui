import type { HeliosAttributeMeta, HeliosChildrenType } from "../.."

export interface MasonryProps {
	children: HeliosChildrenType
}

export const meta: HeliosAttributeMeta<MasonryProps> = {
	_status: "experimental",
	_type: "layout",
	children: {
		type: "HeliosChildrenType",
	},
}
