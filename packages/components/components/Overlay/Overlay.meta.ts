import type { HeliosAttributeMeta } from "../.."
import type { OverlayProps } from "./Overlay.types"

export const meta: HeliosAttributeMeta<OverlayProps> = {
	_patterns: [
		{
			id: "ui-overlay-default",
			description: "default",
			content: `<Overlay isVisible={IS_OPEN} onClose={ON_TOGGLE_OPEN}>{CHILDREN}</Overlay>`,
		},
	],
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
