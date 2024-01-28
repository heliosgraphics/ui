import type { ResultItem } from "../ResultList"

export type SelectItem = Pick<ResultItem, 'name' | 'value'>

export interface SelectProps {
	label?: string
	id?: string
	isDisabled?: boolean
	isLabelHidden?: boolean
	selectedValue?: string
	items: ReadonlyArray<SelectItem>
	onChange: (event) => void
}
