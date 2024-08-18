import type { ReactNode } from "react"
import type { HeliosScale } from "@heliosgraphics/ui"

export interface DashboardCardProps {
	children: ReactNode
	isColumn?: boolean
	gap?: HeliosScale
	noPadding?: boolean
}
