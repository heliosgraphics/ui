import type { HeliosComponentMeta, FlexProps } from "../.."

export interface ColumnProps extends FlexProps {
	isColumnCentered?: boolean
	width: number
}

// export const meta: HeliosComponentMeta<ColumnProps> = {
// 	isColumnCentered: {
// 		type: '"left" | "center" | "right" | "join"',
// 		isOptional: true
// 	},
// 	width: {
// 		type: "string",
// 		isOptional: true
// 	},
// }
