import type { HeliosIconType } from "../.."
import type { HeliosColors } from "../../types/colors"

export interface TileProps {
	color: HeliosColors
	icon: HeliosIconType
	isRound?: boolean
	isRounded?: boolean
	size: number
}
