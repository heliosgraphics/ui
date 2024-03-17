import type { HeliosColors, HeliosAttributeMeta, HeliosIconType } from "../.."

export interface MenuItemProps {
	isActive?: boolean
	label?: string
	labelColor?: HeliosColors
	labelHidden?: boolean
	labelIcon?: HeliosIconType
	title: string
}

export const meta: HeliosAttributeMeta<MenuItemProps> = {
	isActive: {
		type: "boolean",
		isOptional: true,
	},
	label: {
		type: "string",
		isOptional: true,
	},
	labelColor: {
		type: "HeliosColors",
		isOptional: true,
	},
	labelHidden: {
		type: "boolean",
		isOptional: true,
	},
	labelIcon: {
		type: "HeliosIconType",
		isOptional: true,
	},
	title: {
		type: "string",
	},
}
