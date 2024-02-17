import type { ChangeEvent } from "react"

export interface TextareaProps {
	autoComplete?: boolean
	helperText?: string
	id?: string
	isDisabled?: boolean
	isLabelHidden?: boolean
	label: string
	autoFocus?: boolean
	name?: string
	maxLength?: number
	onChange: (_event?: ChangeEvent<HTMLTextAreaElement>) => void
	placeholder?: string
	rows?: number
	value?: string
}
