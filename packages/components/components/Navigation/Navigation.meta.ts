import type { HeliosAttributeMeta } from "../.."
import type { NavigationBaseProps } from "./Navigation.types"

export const meta: HeliosAttributeMeta<NavigationBaseProps> = {
	_status: "experimental",
	_type: "layout",
	_extends: ["FlexProps"],
	withGlass: {
		type: "string",
		isOptional: true,
	},
}
