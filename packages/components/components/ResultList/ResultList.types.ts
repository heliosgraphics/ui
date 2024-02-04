import type { HeliosIconType } from "@heliosgraphics/icons/meta"

export interface ResultItem {
	description?: string
	icon?: HeliosIconType
	type?: "separator"
	isActive?: boolean
	isDisabled?: boolean
	iconColor?: string
	name: string
	onClick?: (value) => void
	value?: string
}

export interface ResultListProps {
	items: ReadonlyArray<ResultItem>
}
