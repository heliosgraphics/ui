import type { HeliosAttributeMeta } from "../.."
import type { MenuProps } from "./Menu.types"

export const meta: HeliosAttributeMeta<MenuProps> = {
	_patterns: [
		{
			id: "ui-menu-default",
			description: "default",
			content: `<div>{CHILDREN}</div>`,
		},
	],
	_status: "experimental",
	_type: "layout",
	children: {
		type: "HeliosChildrenType",
	},
}
