import type { ResultItem } from "../ResultList"
import type { ChangeEventHandler } from "react"

export type SelectItem = Pick<ResultItem, "name" | "value" | "isDisabled">

export interface SelectProps {
	label?: string
	id?: string
	isDisabled?: boolean
	isLabelHidden?: boolean
	selectedValue?: string
	items: ReadonlyArray<SelectItem>
	onChange: ChangeEventHandler<HTMLSelectElement>
}
