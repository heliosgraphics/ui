import type { HeliosIconType } from "@heliosgraphics/icons/meta"

export interface ResultItem {
	description?: string
	icon?: HeliosIconType
	type?: "separator"
	isActive?: boolean
	isDisabled?: boolean
	name: string
	onClick?: (value) => void
}

export interface ResultListProps {
	items: ReadonlyArray<ResultItem>
}
