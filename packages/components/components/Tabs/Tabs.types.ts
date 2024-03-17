import type { ReactNode } from "react"
import type { HeliosAttributeMeta } from "../.."

export interface TabsProps {
	active?: number
	items: Array<string>
	sections: Array<ReactNode>
}

export const meta: HeliosAttributeMeta<TabsProps> = {
	active: {
		type: "number",
		isOptional: true,
	},
	items: {
		type: "Array<string>",
	},
	sections: {
		type: "Array<ReactNode>",
	},
}
