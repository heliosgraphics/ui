import type { HeliosAttributeMeta } from "../.."

export interface MenuSeparatorProps {
	category?: string
}

export const meta: HeliosAttributeMeta<MenuSeparatorProps> = {
	category: {
		type: "string",
		isOptional: true,
	},
}
