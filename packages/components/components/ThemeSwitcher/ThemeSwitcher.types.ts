import type { ButtonProps, HeliosAttributeMeta } from "../.."

export interface ThemeSwitcherProps {
	isIconOnly?: ButtonProps["isIconOnly"]
	size?: ButtonProps["size"]
}

export const meta: HeliosAttributeMeta<ThemeSwitcherProps> = {
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
