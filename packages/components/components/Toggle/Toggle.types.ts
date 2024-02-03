import type { ChangeEvent } from "react"
import { HeliosIntentionType } from '../../types/intentions'

export interface ToggleProps {
	id?: string
	isChecked?: boolean
	isSmall?: boolean
	intent: HeliosIntentionType
	isDisabled?: boolean
	label: string
	onChange?: (event?: ChangeEvent) => void
}
