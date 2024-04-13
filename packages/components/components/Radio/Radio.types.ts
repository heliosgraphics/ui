import type { ChangeEvent } from "react"
import type { HeliosIntentionType, HeliosAttributeMeta } from "../.."

export interface RadioProps {
	id?: string
	intent: HeliosIntentionType
	isDisabled?: boolean
	isSmall?: boolean
	label: string
	onChange?: (event?: ChangeEvent) => Promise<void> | void
	state: string
	value: string
}
