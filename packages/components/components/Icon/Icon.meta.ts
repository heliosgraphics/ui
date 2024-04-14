import type { HeliosAttributeMeta } from "../.."
import type { IconProps } from "./Icon.types"

export const meta: HeliosAttributeMeta<IconProps> = {
	_status: "nominal",
	_type: "core",
	className: {
		type: "string",
		isOptional: true,
	},
	icon: {
		type: "HeliosIconType",
	},
	emphasis: {
		type: "HeliosEmphasisType",
		isOptional: true,
	},
	size: {
		type: "number",
	},
}
