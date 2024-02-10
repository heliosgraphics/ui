import type { ChangeEventHandler } from "react"

export type SelectItem = {
	name: string
	value: string
	isDisabled?: boolean
}

export interface SelectProps {
	label: string
	id?: string
	isDisabled?: boolean
	isLabelHidden?: boolean
	selectedValue?: string
	items: ReadonlyArray<SelectItem>
	onChange: ChangeEventHandler<HTMLSelectElement>
}
