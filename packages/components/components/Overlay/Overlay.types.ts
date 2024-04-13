import type { HeliosChildrenType } from "../.."

export interface OverlayProps {
	children: HeliosChildrenType
	isVisible: boolean
	onClose: () => void
}
