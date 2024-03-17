import type { ChangeEvent } from "react"
import type { HeliosAttributeMeta, HeliosOnClickType } from "../.."

export interface MenuFilterProps {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
	onClear?: HeliosOnClickType
	value: string
}

export const meta: HeliosAttributeMeta<MenuFilterProps> = {
	onChange: {
		type: "(event: ChangeEvent<HTMLInputElement>) => void",
	},
	onClear: {
		type: "HeliosOnClickType",
		isOptional: true,
	},
	value: {
		type: "string",
	},
}
