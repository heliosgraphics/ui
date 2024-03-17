import type { HeliosChildrenType, HeliosAttributeMeta } from "../.."

export interface OverlayProps {
	children: HeliosChildrenType
	isVisible: boolean
	onClose: () => void
}

export const meta: HeliosAttributeMeta<OverlayProps> = {
	children: {
		type: "HeliosChildrenType",
	},
	isVisible: {
		type: "boolean",
	},
	onClose: {
		type: "() => void",
	},
}
