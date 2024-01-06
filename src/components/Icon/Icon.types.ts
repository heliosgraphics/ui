import type { HeliosIconType } from "@heliosgraphics/icons/meta"
import type { FUIColors } from "@heliosgraphics/library/types/colors"

export interface IconProps {
	color?: FUIColors
	className?: string
	name: HeliosIconType
	size: number
	isFullSize?: boolean
}
