import { HeliosColors, HeliosIconType } from "@heliosgraphics/ui"
import type { ReactNode } from "react"

export interface PageProps {
	breadcrumb?: ReactNode
	children?: ReactNode
	disabledPadding?: boolean
	labelColor?: HeliosColors
	labelIcon?: HeliosIconType
	labelText?: string
	title?: string
}
