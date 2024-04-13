import type { HeliosAttributeMeta } from "../.."
import type { ThemeSwitcherLoadingProps } from "./ThemeSwitcherLoading.types"

export const meta: HeliosAttributeMeta<ThemeSwitcherLoadingProps> = {
	_status: "nominal",
	_type: "layout",
	isIconOnly: {
		type: "boolean",
		isOptional: true,
		default: "false",
	},
	size: {
		type: "HeliosSizeType",
		isOptional: true,
		default: "small",
	},
}
