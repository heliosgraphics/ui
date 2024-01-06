import type { HeliosIconType } from "@heliosgraphics/icons/meta"

export interface ConfirmProps {
	title: string
	onCancel: (_event: any) => Promise<void> | void
	onConfirm: (_event: any) => Promise<void> | void
	isOpen: boolean
	details?: string
	confirmText: string
	cancelText: string
	cancelIcon?: HeliosIconType
	confirmIcon?: HeliosIconType
}
