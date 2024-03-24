import type { ReactNode } from "react"

export interface PageProps {
	breadcrumb?: ReactNode
	children?: ReactNode
	disabledPadding?: boolean
	eyebrow?: string
	title?: string
}
