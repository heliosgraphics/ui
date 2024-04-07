import type { ChangeEvent } from "react"
import { HeliosIntentionType, HeliosAttributeMeta } from "../.."

export interface BaseCheckboxProps {
	id?: string
	intent: HeliosIntentionType
	isChecked?: boolean
	isDisabled?: boolean
	isRequired?: boolean
	isSmall?: boolean
	label: string
	onChange?: (event?: ChangeEvent) => void
}

export interface CheckboxProps extends BaseCheckboxProps {}

export const meta: HeliosAttributeMeta<CheckboxProps> = {
	_status: "stable",
	_type: "core",
	id: {
		type: "string",
		isOptional: true,
	},
	intent: {
		type: "HeliosIntentionType",
	},
	isChecked: {
		type: "boolean",
		isOptional: true,
	},
	isDisabled: {
		type: "boolean",
		isOptional: true,
	},
	isRequired: {
		type: "boolean",
		isOptional: true,
	},
	isSmall: {
		type: "boolean",
		isOptional: true,
	},
	label: {
		type: "string",
	},
	onChange: {
		type: "(event?: ChangeEvent) => void",
		isOptional: true,
	},
}
