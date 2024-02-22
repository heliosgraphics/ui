import type { HeliosIconType } from "../.."
import type { HeliosColors } from "../../types/colors"

export interface TileProps {
	color: HeliosColors
	colorAccent?: HeliosColors
	icon: HeliosIconType
	iconAccent?: HeliosIconType
	isRound?: boolean
	isRounded?: boolean
	onClick?: (event?: unknown) => Promise<void> | void
	size: number
	text?: string
}
