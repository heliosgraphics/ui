import type { HeliosIconType, HeliosOnClickType } from "../../.."

export interface ResultItem {
	description?: string
	icon?: HeliosIconType
	type?: "separator"
	isActive?: boolean
	isDisabled?: boolean
	name: string
	onClick?: HeliosOnClickType
}

export interface ResultListProps {
	items?: Array<ResultItem>
}
