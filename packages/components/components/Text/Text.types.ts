import type { HTMLAttributes } from "react"
import type { HeliosEmphasisType, HeliosChildrenType, HeliosOnClickType } from "../.."


export interface BaseTextProps extends HTMLAttributes<HTMLDivElement | HTMLParagraphElement | HTMLHeadingElement> {
	style?: object
	children: HeliosChildrenType
	className?: string
	onClick?: HeliosOnClickType
}

export interface TextProps extends BaseTextProps {
	emphasis?: HeliosEmphasisType
	fontFamily?: "sans" | "serif" | "mono"
	fontStyle?: "italic" | "normal" | "oblique"
	fontWeight?: "thin" | "extra-light" | "light" | "normal" | "medium" | "semibold" | "bold" | "extra-bold" | "black"
	isEllipsis?: boolean
	isNonSelectable?: boolean
	lineClamp?: number
	type: "tiny" | "small" | "paragraph" | "div"
	textAlign?: "left" | "right" | "center" | "justify"
	textDecoration?: "delete" | "overline" | "underline" | "capitalize" | "lowercase" | "uppercase"
	whiteSpace?: "pre" | "pre-line" | "pre-wrap" | "nowrap"
	wordWrap?: "break-word"
}
