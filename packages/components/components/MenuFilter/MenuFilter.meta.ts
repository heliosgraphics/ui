import type { HeliosAttributeMeta } from "../.."
import type { MenuFilterProps } from "./MenuFilter.types"

export const meta: HeliosAttributeMeta<MenuFilterProps> = {
	_status: "experimental",
	_type: "layout",
	onChange: {
		type: "(event?: ChangeEvent<HTMLInputElement>) => void",
	},
	onClear: {
		type: "HeliosOnClickType",
		isOptional: true,
	},
	value: {
		type: "string",
	},
}
