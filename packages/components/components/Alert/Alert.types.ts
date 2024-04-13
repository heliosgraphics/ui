import type { HeliosChildrenType, HeliosIconType, HeliosIntentionType } from "../.."

export interface AlertProps {
	children: HeliosChildrenType
	icon?: HeliosIconType
	intent: HeliosIntentionType
	onClose?: (event?: unknown) => void
	title?: string
}
