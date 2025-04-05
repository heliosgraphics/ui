import type { HeliosAttributeMeta } from "../.."
import type { MenuItemProps } from "./MenuItem.types"

export const meta: HeliosAttributeMeta<MenuItemProps> = {
	_patterns: [
		{
			id: "ui-menu-item-default",
			description: "default",
			content: `<div>{CHILDREN}</div>`,
		},
	],
	_status: "experimental",
	_category: "layout",
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
		default: "aqua",
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
