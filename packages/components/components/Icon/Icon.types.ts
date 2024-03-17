import type { HeliosIconType, HeliosEmphasisType, HeliosAttributeMeta } from "../.."

export interface IconProps {
	className?: string
	name: HeliosIconType
	emphasis?: HeliosEmphasisType
	size: number
}

export const meta: HeliosAttributeMeta<IconProps> = {
	className: {
		type: "string",
		isOptional: true,
	},
	name: {
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
