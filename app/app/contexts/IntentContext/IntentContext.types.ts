import type { SetStateAction, Dispatch } from 'react'
import type { HeliosIntentionType } from "../../../../src"

export interface IntentProviderProps {
	intent: HeliosIntentionType
	setIntent: Dispatch<SetStateAction<HeliosIntentionType>>
}
