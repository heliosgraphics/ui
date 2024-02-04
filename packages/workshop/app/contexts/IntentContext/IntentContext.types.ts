import type { SetStateAction, Dispatch } from 'react'
import type { HeliosIntentionType } from "@heliosgraphics/components"

export interface IntentProviderProps {
	intent: HeliosIntentionType
	setIntent: Dispatch<SetStateAction<HeliosIntentionType>>
}
