import type { HeliosFontFamilyTypes } from "@heliosgraphics/ui"

export type Headinglist =
	| 0
	| 1
	| 2
	| 3
	| 4
	| 5
	| 6
	| "paragraph"
	| "small"
	| "tiny"
	| "monoParagraph"
	| "monoSmall"
	| "monoTiny"

export interface HeadingInfoType {
	fontSize: number
	fontFamily: HeliosFontFamilyTypes
	fontWeight: string
	lineHeight: number
}

export interface HeadingInfoProps {
	children: React.ReactNode
	level: Headinglist
}
