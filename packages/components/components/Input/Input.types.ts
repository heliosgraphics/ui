import type { ResultItem } from "../ResultList"
import type { FocusEvent, KeyboardEvent, ChangeEvent } from "react"

export interface InputProps {
	autoComplete?: "new-password" | "username" | "current-password"
	autoFocus?: boolean
	className?: string
	helperText?: string
	id?: string
	isDisabled?: boolean
	isLabelHidden?: boolean
	isLoading?: boolean
	isRequired?: boolean
	label: string
	maxLength?: number
	name?: string
	onBlur?: (event?: FocusEvent<HTMLInputElement>) => unknown
	onChange?: (event?: ChangeEvent<HTMLInputElement>) => unknown
	onFocus?: (event?: FocusEvent<HTMLInputElement>) => unknown
	onKeyDown?: (event?: KeyboardEvent) => unknown
	onKeyUp?: (event?: KeyboardEvent) => unknown
	placeholder?: string
	results?: Array<ResultItem>
	showResults?: boolean
	type?: "text" | "email" | "date" | "time" | "password"
	value?: string
}
