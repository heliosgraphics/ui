import type { HeliosIconType } from "@heliosgraphics/icons/meta"
import type { HeliosColors } from "../../types/colors"

export interface TileProps {
	color: HeliosColors
	icon: HeliosIconType
	isRound?: boolean
	isRounded?: boolean
	size: number
}
