import type { HeliosAttributeMeta } from "../.."
import type { ButtonGroupProps } from "./ButtonGroup.types"

export const meta: HeliosAttributeMeta<ButtonGroupProps> = {
	_status: "stable",
	_type: "core",
	align: {
		type: '"left" | "center" | "right" | "join"',
		isOptional: true,
		default: "left",
	},
	className: {
		type: "string",
		isOptional: true,
	},
	children: {
		type: "HeliosChildrenType",
	},
	isVertical: {
		type: "boolean",
		isOptional: true,
	},
}
