import type { SetStateAction, Dispatch } from "react"
import type { HeliosColors, HeliosThemes, HeliosIconType, HeliosIntentionType } from "@heliosgraphics/ui"

export interface WorkshopProviderProps {
	color: HeliosColors
	colorAccent: HeliosColors
	hasCover: boolean
	hasHeader: boolean
	hasMenu: boolean
	hasPadding: boolean
	icon: HeliosIconType
	iconAccent: HeliosIconType
	intent: HeliosIntentionType
	setColor: Dispatch<SetStateAction<HeliosColors>>
	setColorAccent: Dispatch<SetStateAction<HeliosColors>>
	setCover: Dispatch<SetStateAction<boolean>>
	setHeader: Dispatch<SetStateAction<boolean>>
	setIcon: Dispatch<SetStateAction<HeliosIconType>>
	setIconAccent: Dispatch<SetStateAction<HeliosIconType>>
	setIntent: Dispatch<SetStateAction<HeliosIntentionType>>
	setMenu: Dispatch<SetStateAction<boolean>>
	setPadding: Dispatch<SetStateAction<boolean>>
	theme: HeliosThemes
}
