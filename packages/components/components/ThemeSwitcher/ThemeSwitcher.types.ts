import type { ButtonProps, HeliosAttributeMeta } from "../.."

export interface ThemeSwitcherProps {
	isIconOnly?: ButtonProps["isIconOnly"]
	size?: ButtonProps["size"]
}

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
