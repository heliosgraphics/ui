import type { HeliosIconType } from "../.."

export interface ResultItem {
	description?: string
	icon?: HeliosIconType
	type?: "separator"
	isActive?: boolean
	isDisabled?: boolean
	name: string
	onClick?: (event?: unknown) => Promise<void> | void
}

export interface ResultListProps {
	items?: Array<ResultItem>
}
