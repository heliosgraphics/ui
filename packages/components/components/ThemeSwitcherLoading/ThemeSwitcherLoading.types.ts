import type { ButtonProps, HeliosAttributeMeta } from "../.."

export interface ThemeSwitcherLoadingProps {
	isIconOnly?: ButtonProps["isIconOnly"]
	size?: ButtonProps["size"]
}

export const meta: HeliosAttributeMeta<ThemeSwitcherLoadingProps> = {
	isIconOnly: {
		type: "boolean",
		isOptional: true,
		default: "false"
	},
	size: {
		type: "HeliosSizeType",
		isOptional: true,
		default: "small"
	},
}
