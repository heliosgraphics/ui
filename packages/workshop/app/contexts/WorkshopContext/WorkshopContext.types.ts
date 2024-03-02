import type { SetStateAction, Dispatch } from "react"
import type { HeliosColors, HeliosIconType, HeliosIntentionType } from "@heliosgraphics/ui"

export interface WorkshopProviderProps {
	color: HeliosColors
	hasHeader: boolean
	hasPadding: boolean
	hasMenu: boolean
	icon: HeliosIconType
	intent: HeliosIntentionType
	setColor: Dispatch<SetStateAction<HeliosColors>>
	setHeader: Dispatch<SetStateAction<boolean>>
	setPadding: Dispatch<SetStateAction<boolean>>
	setMenu: Dispatch<SetStateAction<boolean>>
	setIcon: Dispatch<SetStateAction<HeliosIconType>>
	setIntent: Dispatch<SetStateAction<HeliosIntentionType>>
}
