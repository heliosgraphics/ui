import type { HeliosChildrenType, ResultItem } from "../.."

export interface DropdownProps {
	children: HeliosChildrenType
	items: Array<ResultItem>
	isHidden?: boolean
	isDisabled?: boolean
	position?: "left" | "right"
}
