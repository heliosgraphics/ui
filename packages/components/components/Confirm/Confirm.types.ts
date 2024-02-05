import type { HeliosIconType } from "@heliosgraphics/icons/meta"
import type { HeliosIntentionType } from "../.."

export interface ConfirmProps {
	title: string
	onCancel: (_event: any) => Promise<void> | void
	onConfirm: (_event: any) => Promise<void> | void
	isOpen: boolean
	intent: HeliosIntentionType
	description?: string
	confirmText: string
	cancelText: string
	cancelIcon?: HeliosIconType
	confirmIcon?: HeliosIconType
}
