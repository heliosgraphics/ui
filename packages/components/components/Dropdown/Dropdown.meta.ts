import type { HeliosAttributeMeta } from "../.."
import type { DropdownProps } from "./Dropdown.types"

export const meta: HeliosAttributeMeta<DropdownProps> = {
	_status: "nominal",
	_type: "pattern",
	children: {
		type: "ReactElement<unknown>",
	},
	items: {
		type: "Array<ResultItem>",
	},
	isHidden: {
		type: "boolean",
		isOptional: true,
	},
	isDisabled: {
		type: "boolean",
		isOptional: true,
	},
	position: {
		type: '"left" | "right"',
		isOptional: true,
		default: "right",
	},
}
