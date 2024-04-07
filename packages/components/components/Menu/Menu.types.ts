import type { HeliosAttributeMeta, HeliosChildrenType } from "../.."

export interface MenuProps {
	children: HeliosChildrenType
}

export const meta: HeliosAttributeMeta<MenuProps> = {
	_status: "experimental",
	_type: "layout",
	children: {
		type: "HeliosChildrenType",
	},
}
