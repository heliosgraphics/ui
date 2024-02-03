import type { ReactNode } from "react"

export interface DialogProps {
	children: ReactNode
	isOpen?: boolean
	isCentered?: boolean
	onClose: (_event?: any) => Promise<void> | void
	permalink?: string
	title?: string
}
