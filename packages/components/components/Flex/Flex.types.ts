import type { HTMLAttributes, ReactNode } from "react"
import type { HeliosScale } from "../../types/scale"
import type { RefObject } from "react"

export interface FlexProps extends HTMLAttributes<{}> {
	children: ReactNode
	align?: "center" | "left" | "right"
	className?: string // todo: deprecate passing classNames around
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
	padding?: HeliosScale
	paddingX?: HeliosScale
	paddingY?: HeliosScale
	radius?: 1 | 2 | 3
	ref?: RefObject<HTMLDivElement>
	yAlign?: "top" | "bottom" | "baseline"
}
