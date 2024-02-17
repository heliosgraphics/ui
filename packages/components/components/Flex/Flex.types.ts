import type { HTMLAttributes, ReactNode } from "react"
import type { HeliosScale } from "../../types/scale"
import type { RefObject } from "react"

export type ResponsiveScaleType = HeliosScale | [HeliosScale, HeliosScale, HeliosScale]

export interface FlexProps extends HTMLAttributes<{}> {
	children: ReactNode
	align?: "center" | "left" | "right"
	className?: string
	draggable?: boolean
	gap?: HeliosScale
	isAround?: boolean
	isBetween?: boolean
	isCentered?: boolean
	isColumn?: boolean
	isInline?: boolean
	isStretch?: boolean
	isWrapping?: boolean
	isXCentered?: boolean
	isYCentered?: boolean
	onClick?: (event: any) => void
	padding?: ResponsiveScaleType
	paddingX?: HeliosScale
	paddingY?: HeliosScale
	withRadius?: "" | "normal" | ""
	ref?: RefObject<HTMLDivElement>
	yAlign?: "top" | "bottom" | "baseline"
	withBackground?: boolean
}
