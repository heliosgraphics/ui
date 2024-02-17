import type { SetStateAction, Dispatch } from "react"
import type { HeliosColors, HeliosIconType, HeliosIntentionType } from "@heliosgraphics/ui"

export interface WorkshopProviderProps {
	color: HeliosColors
	hasHeader: boolean
	icon: HeliosIconType
	intent: HeliosIntentionType
	setColor: Dispatch<SetStateAction<HeliosColors>>
	setHeader: Dispatch<SetStateAction<boolean>>
	setIcon: Dispatch<SetStateAction<HeliosIconType>>
	setIntent: Dispatch<SetStateAction<HeliosIntentionType>>
}
