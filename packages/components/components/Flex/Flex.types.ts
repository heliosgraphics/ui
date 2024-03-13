import type { HTMLAttributes } from "react"
import type { HeliosScale, HeliosAttributeMeta, HeliosRadius, HeliosOnClickType, HeliosChildrenType } from "../.."
import type { RefObject } from "react"

export type ResponsiveScaleType = HeliosScale | [HeliosScale, HeliosScale, HeliosScale]
export type ResponsiveRadiusType = HeliosRadius | [HeliosRadius, HeliosRadius, HeliosRadius]

interface FlexBaseProps {
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

export type FlexProps = FlexBaseProps & HTMLAttributes<{}>

// prettier-ignore
export const meta: HeliosAttributeMeta<FlexBaseProps> = {
	children: { type: "HeliosChildrenType" },
	className: { type: "string", isOptional: true, },
	draggable: { type: "boolean", isOptional: true, },
	gap: { type: "HeliosScale", isOptional: true, },
	isAround: { type: "boolean", isOptional: true, },
	isBetween: { type: "boolean", isOptional: true, },
	isCentered: { type: "boolean", isOptional: true, },
	isColumn: { type: "boolean", isOptional: true, },
	isInline: { type: "boolean", isOptional: true, },
	isStretch: { type: "boolean", isOptional: true, },
	isWrapping: { type: "boolean", isOptional: true, },
	isXCentered: { type: "boolean", isOptional: true, },
	isYCentered: { type: "boolean", isOptional: true, },
	onClick: { type: "HeliosOnClickType", isOptional: true, },
	padding: { type: "ResponsiveScaleType", isOptional: true, },
	paddingX: { type: "HeliosScale", isOptional: true, },
	paddingY: { type: "HeliosScale", isOptional: true, },
	ref: { type: "RefObject<HTMLDivElement>", isOptional: true, },
	withBackground: { type: "boolean", isOptional: true, },
	withRadius: { type: "ResponsiveRadiusType", isOptional: true, },
	xAlign: { type: '"start" | "end" | "center"', isOptional: true, },
	yAlign: { type: '"start" | "end" | "baseline"', isOptional: true, },
}
