import type { SetStateAction, Dispatch } from "react"
import type { HeliosColors, HeliosThemes, HeliosIconType, HeliosIntentionType, HeliosEmphasisType } from "@heliosgraphics/ui"

export interface WorkshopProviderProps {
	color: HeliosColors
	colorAccent: HeliosColors
	emphasis: HeliosEmphasisType
	hasCover: boolean
	hasHeader: boolean
	hasMenu: boolean
	hasPadding: boolean
	icon: HeliosIconType
	iconAccent: HeliosIconType
	intent: HeliosIntentionType
	isDisabled: boolean
	isLoading: boolean
	setColor: Dispatch<SetStateAction<HeliosColors>>
	setColorAccent: Dispatch<SetStateAction<HeliosColors>>
	setCover: Dispatch<SetStateAction<boolean>>
	setDisabled: Dispatch<SetStateAction<boolean>>
	setEmphasis: Dispatch<SetStateAction<HeliosEmphasisType>>
	setHeader: Dispatch<SetStateAction<boolean>>
	setIcon: Dispatch<SetStateAction<HeliosIconType>>
	setIconAccent: Dispatch<SetStateAction<HeliosIconType>>
	setIntent: Dispatch<SetStateAction<HeliosIntentionType>>
	setLoading: Dispatch<SetStateAction<boolean>>
	setMenu: Dispatch<SetStateAction<boolean>>
	setPadding: Dispatch<SetStateAction<boolean>>
	theme: HeliosThemes
}
