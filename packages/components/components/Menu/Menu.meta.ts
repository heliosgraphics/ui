import type { HeliosAttributeMeta } from "../.."
import type { MenuProps } from "./Menu.types"

export const meta: HeliosAttributeMeta<MenuProps> = {
	_status: "experimental",
	_type: "layout",
	children: {
		type: "HeliosChildrenType",
	},
}
