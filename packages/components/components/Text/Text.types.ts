import type { HTMLAttributes } from 'react'
import type { HeliosEmphasisType } from "../../types/intentions"

export interface BaseTextProps extends HTMLAttributes<HTMLDivElement> {
	style?: object
}

export interface TextProps extends BaseTextProps {
	className?: string
	emphasis?: HeliosEmphasisType
	fontFamily?: "sans" | "serif" | "mono"
	fontStyle?: "italic" | "normal" | "oblique"
	fontWeight?:
	| "thin"
	| "extra-light"
	| "light"
	| "normal"
	| "medium"
	| "semibold"
	| "bold"
	| "extra-bold"
	| "black"
	isEllipsis?: boolean
	isUnselectable?: boolean
	lineClamp?: number
	type: "tiny" | "small" | "paragraph" | "div"
	textAlign?: "left" | "right" | "center" | "justify"
	textDecoration?:
	| "delete"
	| "overline"
	| "underline"
	| "capitalize"
	| "lowercase"
	| "uppercase"
	whiteSpace?: "pre" | "pre-line" | "pre-wrap" | "nowrap"
	wordWrap?: "break-word"
}
