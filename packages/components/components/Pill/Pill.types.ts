import type { HeliosIconType, HeliosSizeType, HeliosColors, HeliosAttributeMeta } from "../.."

export interface PillProps {
	color: HeliosColors
	icon?: HeliosIconType
	isDark?: boolean
	isLabelHidden?: boolean
	isMono?: boolean
	isRounded?: boolean
	size?: HeliosSizeType
	label: string
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
	size: {
		type: "HeliosSizeType",
		isOptional: true,
		default: "normal",
	},
	label: {
		type: "string",
		isOptional: true,
	},
}
