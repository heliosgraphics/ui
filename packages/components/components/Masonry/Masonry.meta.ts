import type { HeliosAttributeMeta } from "../.."
import type { MasonryProps } from "./Masonry.types"

export const meta: HeliosAttributeMeta<MasonryProps> = {
	_status: "experimental",
	_type: "layout",
	children: {
		type: "HeliosChildrenType",
	},
	brakepoints: {
		type: "[number, number, number]",
	},
	columns: {
		type: "[number, number, number]",
	},
	gap: {
		type: "[number, number, number]",
	},
}
