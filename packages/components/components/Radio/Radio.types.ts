import type { ChangeEvent } from 'react'
import type { HeliosIntentionType } from '../../types/intentions'

export interface RadioProps {
	id?: string
	intent: HeliosIntentionType
	isDisabled?: boolean
	isSmall?: boolean
	label: string
	onChange?: (event?: ChangeEvent) => void
	state: string
	value: string
}
