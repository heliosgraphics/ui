import type { HeliosAttributeMeta, HeliosChildrenType } from "../.."

export interface MenuCategoryProps {
	category?: string
	children: HeliosChildrenType
	isFolder?: boolean
}

export const meta: HeliosAttributeMeta<MenuCategoryProps> = {
	category: {
		type: "string",
		isOptional: true,
	},
	children: {
		type: "HeliosChildrenType",
	},
	isFolder: {
		type: "boolean",
		isOptional: true,
	},
}
