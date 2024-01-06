import type { HeliosIconType } from "@heliosgraphics/icons/meta"
import type { FUIColors } from "@heliosgraphics/library/types/colors"

export interface ResultItem {
	description?: string
	icon?: HeliosIconType
	type?: "separator"
	isActive?: boolean
	iconColor?: FUIColors
	name: string
	onClick?: (value) => void
	value?: string
}

export interface ResultListProps {
	items: ReadonlyArray<ResultItem>
}
