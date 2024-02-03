export interface CheckboxProps {
	alignLabel?: "left" | "right" | "hidden"
	id?: string
	description?: string
	isChecked?: boolean
	isLabelHidden?: boolean
	isRequired?: boolean
	isDisabled?: boolean
	label: string
	name?: string
	onChange?: Function
}
