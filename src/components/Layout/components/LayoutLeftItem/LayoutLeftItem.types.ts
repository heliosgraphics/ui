import type { HeliosIconType } from "@heliosgraphics/icons/meta"

export interface LayoutLeftItemProps {
	icon?: HeliosIconType
	href: string
	pathName: string
	step?: number
	text: string
	onClick?: () => void
}
