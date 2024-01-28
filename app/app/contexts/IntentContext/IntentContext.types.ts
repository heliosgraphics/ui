import React from 'react'
import type { HeliosIntentionType } from "../../../../src"

export interface IntentProviderProps {
	intent: HeliosIntentionType
	setIntent: React.Dispatch<React.SetStateAction<HeliosIntentionType>>
}
