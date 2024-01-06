import React from "react"

export interface DialogProps {
	children: React.ReactNode
	isOpen?: boolean
	isCentered?: boolean
	onClose: (_event?: any) => Promise<void> | void
	permalink?: string
	title?: string
}
