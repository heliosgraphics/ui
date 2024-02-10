import type { HeliosColors } from "../../types/colors"

export interface PillProps {
	color: HeliosColors
	isDark?: boolean
	isSmall?: boolean
	isMono?: boolean
	isRounded?: boolean
	label: string
}
