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
	onBlur?: (event?: FocusEvent<HTMLInputElement>) => Promise<void> | void
	onChange?: (event?: ChangeEvent<HTMLInputElement>) => Promise<void> | void
	onFocus?: (event?: FocusEvent<HTMLInputElement>) => Promise<void> | void
	onKeyDown?: (event?: KeyboardEvent) => Promise<void> | void
	onKeyUp?: (event?: KeyboardEvent) => Promise<void> | void
	placeholder?: string
	results?: Array<ResultItem>
	showResults?: boolean
	type?: "text" | "email" | "date" | "time" | "password"
	value?: string
}
