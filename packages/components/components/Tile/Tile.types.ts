import type { HeliosIconType, HeliosColors, HeliosOnClickType } from "../.."

export interface TileProps {
	color: HeliosColors
	colorAccent?: HeliosColors
	icon: HeliosIconType
	iconAccent?: HeliosIconType
	isRound?: boolean
	isRounded?: boolean
	onClick?: HeliosOnClickType
	size: number
	text?: string
}
