import type { HeliosOnClickType, HeliosAttributeMeta, ResultItem } from "../.."
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
	onClear?: HeliosOnClickType
	onFocus?: (event?: FocusEvent<HTMLInputElement>) => unknown
	onKeyDown?: (event?: KeyboardEvent) => unknown
	onKeyUp?: (event?: KeyboardEvent) => unknown
	placeholder?: string
	results?: Array<ResultItem>
	showResults?: boolean
	type?: "text" | "email" | "date" | "time" | "password"
	value?: string
}

export const meta: HeliosAttributeMeta<InputProps> = {
	_status: "stable",
	_type: "core",
	autoComplete: { type: '"new-password" | "username" | "current-password"', isOptional: true },
	autoFocus: { type: "boolean", isOptional: true },
	className: { type: "string", isOptional: true },
	helperText: { type: "string", isOptional: true },
	id: { type: "string", isOptional: true },
	isDisabled: { type: "boolean", isOptional: true },
	isLabelHidden: { type: "boolean", isOptional: true },
	isLoading: { type: "boolean", isOptional: true },
	isRequired: { type: "boolean", isOptional: true },
	label: { type: "string" },
	maxLength: { type: "number", isOptional: true },
	name: { type: "string", isOptional: true },
	onBlur: { type: "(event?: FocusEvent<HTMLInputElement>) => unknown", isOptional: true },
	onChange: { type: "(event?: ChangeEvent<HTMLInputElement>) => unknown", isOptional: true },
	onClear: { type: "HeliosOnClickType", isOptional: true },
	onFocus: { type: "(event?: FocusEvent<HTMLInputElement>) => unknown", isOptional: true },
	onKeyDown: { type: "(event?: KeyboardEvent) => unknown", isOptional: true },
	onKeyUp: { type: "string", isOptional: true },
	placeholder: { type: "string", isOptional: true },
	results: { type: "Array<ResultItem>", isOptional: true },
	showResults: { type: "boolean", isOptional: true },
	type: { type: '"text" | "email" | "date" | "time" | "password"', isOptional: true, default: "text" },
	value: { type: "string" },
}
