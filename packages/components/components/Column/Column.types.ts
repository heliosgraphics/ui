import type { HeliosAttributeMeta, FlexProps } from "../.."

export interface BaseColumnProps {
	isColumnCentered?: boolean
	width: number
}

export type ColumnProps = BaseColumnProps & FlexProps

export const meta: HeliosAttributeMeta<BaseColumnProps> = {
	_extends: ["FlexProps"],
	isColumnCentered: {
		type: "boolean",
		isOptional: true,
	},
	width: {
		type: "number",
	},
}
