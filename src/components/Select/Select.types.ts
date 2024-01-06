export interface SelectItem {
	name: string
	value: string
}

export interface SelectProps {
	label?: string
	id?: string
	isDisabled?: boolean
	isLabelHidden?: boolean
	selectedValue?: string
	items: ReadonlyArray<SelectItem>
	onChange: (event) => void
}
