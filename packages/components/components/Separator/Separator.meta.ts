import type { HeliosAttributeMeta } from "../.."
import type { SeparatorProps } from "./Separator.types"

export const meta: HeliosAttributeMeta<SeparatorProps> = {
	_patterns: [
		{
			id: "ui-separator-default",
			description: "default",
			content: `<Separator/>`,
		},
		{
			id: "ui-separator-vertical-dashed",
			description: "vertical dashed",
			content: `<Separator lineStyle="dashed" />`,
		},
	],
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
	isVertical: {
		type: "boolean",
		isOptional: true,
	},
	lineStyle: {
		type: "dashed | dotted",
		isOptional: true,
	},
}
