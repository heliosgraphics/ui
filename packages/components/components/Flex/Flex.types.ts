import type { HTMLAttributes } from "react"
import type { HeliosScale, HeliosAttributeMeta, HeliosRadius, HeliosOnClickType, HeliosChildrenType } from "../.."
import type { RefObject } from "react"

export type ResponsiveScaleType = HeliosScale | [HeliosScale, HeliosScale, HeliosScale]
export type ResponsiveRadiusType = HeliosRadius | [HeliosRadius, HeliosRadius, HeliosRadius]

export interface FlexBaseProps {
	children: HeliosChildrenType
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
	ref?: RefObject<HTMLDivElement>
	withBackground?: boolean
	withRadius?: ResponsiveRadiusType
	xAlign?: "start" | "end" | "center"
	yAlign?: "start" | "end" | "baseline"
}

export type FlexProps = FlexBaseProps & HTMLAttributes<unknown>
