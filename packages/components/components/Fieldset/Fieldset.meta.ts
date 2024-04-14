import type { HeliosAttributeMeta } from "../.."
import type { FieldsetProps } from "./Fieldset.types"

export const meta: HeliosAttributeMeta<FieldsetProps> = {
	_status: "experimental",
	_type: "core",
	children: {
		type: "HeliosChildrenType",
	},
	legend: {
		type: "string",
	},
}
