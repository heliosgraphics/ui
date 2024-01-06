import type { ResultItem } from "../ResultList"

export interface DropdownProps {
	children: any // React.ReactNode<> isn't generic
	items: ReadonlyArray<ResultItem>
	isHidden?: boolean
	isDisabled?: boolean
	position?: "left" | "right"
}
