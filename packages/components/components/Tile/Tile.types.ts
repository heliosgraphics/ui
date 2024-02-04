import type { HeliosIconType } from "@heliosgraphics/icons/meta"
import type { FUIColorScale } from "@heliosgraphics/library/types/colors"

export interface TileProps {
	color: FUIColorScale | "white"
	hex?: string
	icon: HeliosIconType
	isRound?: boolean
	isRounded?: boolean
	size: number
}
