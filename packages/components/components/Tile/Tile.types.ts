import type { HeliosIconType } from "@heliosgraphics/icons/meta"

export interface TileProps {
	color: string | "white"
	hex?: string
	icon: HeliosIconType
	isRound?: boolean
	isRounded?: boolean
	size: number
}
