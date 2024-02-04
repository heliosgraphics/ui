export interface RadioProps {
	isDisabled?: boolean
	label: string
	onBlur?: Function
	onChange: (event) => void
	state: string
	value: string
}
