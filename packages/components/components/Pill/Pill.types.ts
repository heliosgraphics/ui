import type { HeliosOnClickType, HeliosIconType, HeliosSizeType, HeliosColors } from "../.."

export interface PillProps {
	color: HeliosColors
	icon?: HeliosIconType
	isDark?: boolean
	isLabelHidden?: boolean
	isMono?: boolean
	isRounded?: boolean
	label: string
	onClick?: HeliosOnClickType
	size?: HeliosSizeType
}
