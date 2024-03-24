import type { HeliosAttributeMeta, HeliosChildrenType } from "../.."

export interface MenuCategoryProps {
	category?: string
	children: HeliosChildrenType
	isFolder?: boolean
	isFolderClosed?: boolean
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
	isFolderClosed: {
		type: "boolean",
		isOptional: true,
		default: "false",
	},
}
