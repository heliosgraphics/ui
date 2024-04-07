import type { HeliosChildrenType, HeliosAttributeMeta } from "../.."

export interface OverlayProps {
	children: HeliosChildrenType
	isVisible: boolean
	onClose: () => void
}

export const meta: HeliosAttributeMeta<OverlayProps> = {
	_status: "stable",
	_type: "core",
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
