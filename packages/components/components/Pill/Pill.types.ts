import type { HeliosOnClickType, HeliosIconType, HeliosSizeType, HeliosColors, HeliosAttributeMeta } from "../.."

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

export const meta: HeliosAttributeMeta<PillProps> = {
	color: {
		type: "HeliosColors",
		default: "gray",
	},
	icon: {
		type: "HeliosIconType",
		isOptional: true,
	},
	isDark: {
		type: "HeliosIntentionType",
		isOptional: true,
	},
	isLabelHidden: {
		type: "(event?: unknown) => void",
		isOptional: true,
	},
	isMono: {
		type: "string",
		isOptional: true,
	},
	isRounded: {
		type: "string",
		isOptional: true,
	},
	onClick: {
		type: "HeliosOnClickType",
		isOptional: true,
	},
	label: {
		type: "string",
		isOptional: true,
	},
	size: {
		type: "HeliosSizeType",
		isOptional: true,
		default: "normal",
	},
}
