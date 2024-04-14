import type { HeliosAttributeMeta } from "../.."
import type { DatePickerProps } from "./DatePicker.types"

export const meta: HeliosAttributeMeta<DatePickerProps> = {
	_status: "experimental",
	_type: "core",
	date: {
		type: "string",
		isOptional: true,
	},
}
