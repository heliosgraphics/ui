import type { ResultItem } from "../ResultList"
import type { ReactNode } from "react"

export interface DropdownProps {
	children: ReactNode // React.ReactNode<> isn't generic
	items: ReadonlyArray<ResultItem>
	isHidden?: boolean
	isDisabled?: boolean
	position?: "left" | "right"
}
