import type { ResultItem, HeliosAttributeMeta } from "../.."
import type { ReactElement } from "react"

export interface DropdownProps {
	children: ReactElement<unknown>
	items: Array<ResultItem>
	isHidden?: boolean
	isDisabled?: boolean
	position?: "left" | "right"
}

export const meta: HeliosAttributeMeta<DropdownProps> = {
	_status: "nominal",
	_type: "core",
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
