import type { ResultItem } from "../ResultList"

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
	onBlur?: (event?: React.FocusEvent<HTMLInputElement>) => void
	onFocus?: (event?: React.FocusEvent<HTMLInputElement>) => void
	onKeyDown?: (event?: React.KeyboardEvent) => void
	onKeyUp?: (event?: React.KeyboardEvent) => void
	onChange?: (event?: React.ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
	type?: "text" | "email" | "date" | "time" | "password"
	value?: string
	defaultValue?: string
}
