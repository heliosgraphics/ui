import type { HTMLAttributes } from "react"
import type { HeliosEmphasisType, HeliosAttributeMeta } from "../.."

export interface TextBaseProps {
	emphasis?: HeliosEmphasisType
	fontFamily?: "sans" | "serif" | "mono"
	fontStyle?: "italic" | "normal" | "oblique"
	fontWeight?: "thin" | "extra-light" | "light" | "normal" | "medium" | "semibold" | "bold" | "extra-bold" | "black"
	isEllipsis?: boolean
	isNonSelectable?: boolean
	lineClamp?: 1 | 2 | 3
	textAlign?: "left" | "right" | "center" | "justify"
	textDecoration?: "delete" | "overline" | "underline" | "capitalize" | "lowercase" | "uppercase"
	type: "tiny" | "small" | "paragraph" | "div"
	whiteSpace?: "pre" | "pre-line" | "pre-wrap" | "nowrap"
	wordWrap?: "break-word"
}

export type TextProps = TextBaseProps & HTMLAttributes<HTMLDivElement | HTMLParagraphElement>

export const meta: HeliosAttributeMeta<TextBaseProps> = {
	_extends: ["HTMLAttributes<HTMLDivElement | HTMLParagraphElement>"],
	emphasis: {
		type: "HeliosEmphasisType",
		isOptional: true,
	},
	fontFamily: {
		type: '"sans" | "serif" | "mono"',
		isOptional: true,
	},
	fontStyle: {
		type: '"italic" | "normal" | "oblique"',
		isOptional: true,
	},
	fontWeight: {
		type: '"thin" | "extra-light" | "light" | "normal" | "medium" | "semibold" | "bold" | "extra-bold" | "black"',
		isOptional: true,
	},
	isEllipsis: {
		type: "boolean",
		isOptional: true,
	},
	isNonSelectable: {
		type: "boolean",
		isOptional: true,
	},
	lineClamp: {
		type: "1 | 2 | 3",
		isOptional: true,
	},
	textAlign: {
		type: '"left" | "right" | "center" | "justify"',
		isOptional: true,
	},
	textDecoration: {
		type: '"delete" | "overline" | "underline" | "capitalize" | "lowercase" | "uppercase"',
		isOptional: true,
	},
	type: {
		type: '"tiny" | "small" | "paragraph" | "div"',
	},
	whiteSpace: {
		type: '"pre" | "pre-line" | "pre-wrap" | "nowrap"',
		isOptional: true,
	},
	wordWrap: {
		type: '"break-word"',
		isOptional: true,
	},
}
