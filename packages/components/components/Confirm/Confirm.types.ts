import type { HeliosIconType } from "../.."
import type { HeliosIntentionType } from "../.."

export interface ConfirmProps {
	cancelText: string
	confirmText: string
	description?: string
	icon?: HeliosIconType
	intent: HeliosIntentionType
	isOpen: boolean
	onCancel: (_event: any) => Promise<void> | void
	onConfirm: (_event: any) => Promise<void> | void
	title: string
}
