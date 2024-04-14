import type { ChangeEvent } from "react"
import { HeliosIntentionType } from "../.."

export interface BaseCheckboxProps {
	id?: string
	intent: HeliosIntentionType
	isChecked?: boolean
	isDisabled?: boolean
	isLabelHidden?: boolean
	isRequired?: boolean
	isSmall?: boolean
	label: string
	onChange?: (event?: ChangeEvent) => void
}

export interface CheckboxProps extends BaseCheckboxProps {}
