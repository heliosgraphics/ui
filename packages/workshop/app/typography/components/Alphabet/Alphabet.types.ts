import type { HeliosFontFamilyTypes } from "@heliosgraphics/ui"

export interface FontTypeInfo {
	name: string
	license: string
	url: string
	className: string
}

export interface AlphabetProps {
	family: HeliosFontFamilyTypes
}
