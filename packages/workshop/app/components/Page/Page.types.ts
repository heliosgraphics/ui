import type { ReactNode } from 'react'

export interface PageProps {
	children: ReactNode
	noPadding?: boolean
	title?: string
	eyebrow?: string
}
