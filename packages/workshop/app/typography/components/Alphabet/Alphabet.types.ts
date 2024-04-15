import type { HeliosFontFamilyTypes } from "@heliosgraphics/ui"

export interface FontTypeInfo {
	name: string
	license: string
	url: string
	description: string
	className: string
	features?: Array<Record<string, string>>
}

export interface AlphabetProps {
	family: HeliosFontFamilyTypes
}
