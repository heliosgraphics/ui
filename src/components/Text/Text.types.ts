import type { HeliosEmphasisType } from "../../types/intentions"

export interface TextProps {
	children: React.ReactNode
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
	onClick?: () => void
	textAlign?: "left" | "right" | "center" | "justify"
	textDecoration?:
		| "delete"
		| "overline"
		| "underline"
		| "capitalize"
		| "lowercase"
		| "uppercase"
	whiteSpace?: "pre" | "pre-line" | "pre-wrap" | "nowrap"
	withLinks?: boolean
	wordWrap?: "break-word"
}
