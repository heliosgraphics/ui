import type { ReactNode } from "react"
import type { HeliosFontFamilyTypes } from "@heliosgraphics/ui"

export type HeadingList =
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
	| "monoMicro"

export interface HeadingInfoType {
	fontSize: number
	fontFamily: HeliosFontFamilyTypes
	fontWeight: string
	lineHeight: number
}

export interface HeadingInfoProps {
	children: ReactNode
	level: HeadingList
}
