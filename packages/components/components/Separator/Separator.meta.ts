import type { HeliosAttributeMeta } from "../.."
import type { SeparatorProps } from "./Separator.types"

export const meta: HeliosAttributeMeta<SeparatorProps> = {
	_status: "stable",
	_type: "core",
	className: {
		type: "string",
		isOptional: true,
	},
	height: {
		type: "number",
		isOptional: true,
	},
	isLight: {
		type: "boolean",
		isOptional: true,
	},
	isTransparent: {
		type: "boolean",
		isOptional: true,
	},
	isVertical: {
		type: "boolean",
		isOptional: true,
	},
}
