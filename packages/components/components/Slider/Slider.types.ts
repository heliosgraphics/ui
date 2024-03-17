import type { ReactNode } from "react"
import type { HeliosAttributeMeta } from "../.."

export interface SliderProps {
	items?: Array<ReactNode>
}

export const meta: HeliosAttributeMeta<SliderProps> = {
	items: {
		type: "Array<ReactNode>",
		isOptional: true,
	},
}
