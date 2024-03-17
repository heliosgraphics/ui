import type { ChangeEvent } from "react"
import type { HeliosAttributeMeta } from "../.."

export interface TextareaProps {
	autoComplete?: boolean
	autoFocus?: boolean
	helperText?: string
	id?: string
	isDisabled?: boolean
	isLabelHidden?: boolean
	label: string
	maxLength?: number
	name?: string
	onChange: (_event?: ChangeEvent<HTMLTextAreaElement>) => unknown
	placeholder?: string
	rows?: number
	value?: string
}

export const meta: HeliosAttributeMeta<TextareaProps> = {
	autoComplete: { type: "boolean", isOptional: true },
	autoFocus: { type: "boolean", isOptional: true },
	helperText: { type: "string", isOptional: true },
	id: { type: "string", isOptional: true },
	isDisabled: { type: "boolean", isOptional: true },
	isLabelHidden: { type: "boolean", isOptional: true },
	label: { type: "string" },
	maxLength: { type: "number", isOptional: true },
	name: { type: "string", isOptional: true },
	onChange: { type: "(_event?: ChangeEvent<HTMLTextAreaElement>) => unknown" },
	placeholder: { type: "string", isOptional: true },
	rows: { type: "number", isOptional: true },
	value: { type: "string", isOptional: true },
}
