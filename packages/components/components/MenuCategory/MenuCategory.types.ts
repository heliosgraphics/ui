import type { HeliosChildrenType } from "../.."

export interface MenuCategoryProps {
	category?: string
	children: HeliosChildrenType
	isFolder?: boolean
	isFolderClosed?: boolean
}
