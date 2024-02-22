import type { HTMLAttributes } from "react"
import type { HeliosScale, HeliosRadius, HeliosOnClickType, HeliosChildrenType } from "../.."
import type { RefObject } from "react"

export type ResponsiveScaleType = HeliosScale | [HeliosScale, HeliosScale, HeliosScale]
export type ResponsiveRadiusType = HeliosRadius | [HeliosRadius, HeliosRadius, HeliosRadius]

export interface FlexProps extends HTMLAttributes<{}> {
	children: HeliosChildrenType
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
	onClick?: HeliosOnClickType
	padding?: ResponsiveScaleType
	paddingX?: HeliosScale
	paddingY?: HeliosScale
	withRadius?: ResponsiveRadiusType
	ref?: RefObject<HTMLDivElement>
	yAlign?: "top" | "bottom" | "baseline"
	withBackground?: boolean
}
