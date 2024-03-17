import type { HeliosAttributeMeta, HeliosChildrenType } from "../.."

export interface MenuProps {
	children: HeliosChildrenType
}

export const meta: HeliosAttributeMeta<MenuProps> = {
	children: {
		type: "HeliosChildrenType",
	},
}
