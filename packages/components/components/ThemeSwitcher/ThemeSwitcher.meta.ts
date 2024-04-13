import type { HeliosAttributeMeta } from "../.."
import type { ThemeSwitcherProps } from "./ThemeSwitcher.types"

export const meta: HeliosAttributeMeta<ThemeSwitcherProps> = {
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
