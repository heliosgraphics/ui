import type { HeliosAttributeMeta } from "../.."

export interface MenuCategoryProps {
	category: string
}

export const meta: HeliosAttributeMeta<MenuCategoryProps> = {
	category: {
		type: "string",
	},
}
