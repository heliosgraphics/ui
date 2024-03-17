import type { HeliosAttributeMeta, HeliosChildrenType } from "../.."

export interface DetailsProps {
	children: HeliosChildrenType
	isOpen?: boolean
	title: string
}

export const meta: HeliosAttributeMeta<DetailsProps> = {
	children: {
		type: "HeliosChildrenType",
	},
	isOpen: {
		type: "boolean",
		isOptional: true
	},
	title: {
		type: "string",
	},
}
