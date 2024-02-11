import type { HeliosIconType, HeliosColors } from "../.."

export interface PillProps {
	color: HeliosColors
	isDark?: boolean
	isSmall?: boolean
	isMono?: boolean
	icon?: HeliosIconType
	isRounded?: boolean
	label: string
}
