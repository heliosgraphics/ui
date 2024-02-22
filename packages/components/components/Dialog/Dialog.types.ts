import type { HeliosOnClickType, HeliosChildrenType } from "../.."

export interface DialogProps {
	children: HeliosChildrenType
	isOpen?: boolean
	isCentered?: boolean
	onClose: (_?: unknown) => Promise<void> | void
	onClick?: HeliosOnClickType
	title?: string
}
