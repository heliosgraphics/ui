import type { HeliosAttributeMeta } from "../.."
import type { OverlayProps } from "./Overlay.types"

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
