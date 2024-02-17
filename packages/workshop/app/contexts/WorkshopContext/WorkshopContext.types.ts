import type { SetStateAction, Dispatch } from "react"
import type { HeliosColors, HeliosIntentionType } from "@heliosgraphics/ui"

export interface WorkshopProviderProps {
	intent: HeliosIntentionType
	setIntent: Dispatch<SetStateAction<HeliosIntentionType>>
	color: HeliosColors
	setColor: Dispatch<SetStateAction<HeliosColors>>
	hasHeader: boolean
	setHeader: Dispatch<SetStateAction<boolean>>
}
