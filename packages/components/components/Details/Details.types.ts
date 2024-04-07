import type { HeliosAttributeMeta, HeliosChildrenType } from "../.."

export interface DetailsProps {
	children: HeliosChildrenType
	isOpen?: boolean
	title: string
}

export const meta: HeliosAttributeMeta<DetailsProps> = {
	_status: "nominal",
	_type: "pattern",
	children: {
		type: "HeliosChildrenType",
	},
	isOpen: {
		type: "boolean",
		isOptional: true,
	},
	title: {
		type: "string",
	},
}
