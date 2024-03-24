import type { ChangeEventHandler } from "react"
import type { HeliosAttributeMeta } from "../.."

export type SelectItem = {
	name: string
	value: string
	isDisabled?: boolean
}

export interface SelectProps {
	id?: string
	isDisabled?: boolean
	isLabelHidden?: boolean
	isSmall?: boolean
	items: Array<SelectItem>
	label: string
	onChange: ChangeEventHandler<HTMLSelectElement>
	selectedValue?: string
}

export const meta: HeliosAttributeMeta<SelectProps> = {
	id: {
		type: "string",
		isOptional: true,
	},
	isDisabled: {
		type: "boolean",
		isOptional: true,
	},
	isLabelHidden: {
		type: "boolean",
		isOptional: true,
	},
	isSmall: {
		type: "boolean",
		isOptional: true,
	},
	items: {
		type: "string",
	},
	label: {
		type: "string",
	},
	onChange: {
		type: "ChangeEventHandler<HTMLSelectElement>",
	},
	selectedValue: {
		type: "string",
		isOptional: true,
	},
}
