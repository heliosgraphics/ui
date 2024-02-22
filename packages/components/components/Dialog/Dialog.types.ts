import type { HeliosOnClickType } from "../.."
import type { ReactNode } from "react"

export interface DialogProps {
	children: ReactNode
	isOpen?: boolean
	isCentered?: boolean
	onClose: (_?: unknown) => Promise<void> | void
	onClick?: HeliosOnClickType
	title?: string
}
