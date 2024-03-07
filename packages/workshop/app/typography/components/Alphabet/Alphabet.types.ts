import type { FontFamilyTypes } from "gamen/libs/types/fonts"

export interface FontTypeInfo {
	name: string
	license: string
	url: string
	className: string
}

export interface AlphabetProps {
	family: FontFamilyTypes
}
