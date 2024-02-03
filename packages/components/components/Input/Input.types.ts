import type { ResultItem } from "../ResultList"
import type { FocusEvent, KeyboardEvent, ChangeEvent } from 'react'

export interface InputProps {
	autoFocus?: boolean
	autoComplete?: "new-password" | "username" | "current-password"
	className?: string
	helperText?: string
	id?: string
	isDisabled?: boolean
	isRequired?: boolean
	isLabelHidden?: boolean
	isLoading?: boolean
	results?: Array<ResultItem>
	label: string
	maxLength?: number
	name?: string
	onBlur?: (event?: FocusEvent<HTMLInputElement>) => void
	onFocus?: (event?: FocusEvent<HTMLInputElement>) => void
	onKeyDown?: (event?: KeyboardEvent) => void
	onKeyUp?: (event?: KeyboardEvent) => void
	onChange?: (event?: ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
	type?: "text" | "email" | "date" | "time" | "password"
	value?: string
	defaultValue?: string
}
