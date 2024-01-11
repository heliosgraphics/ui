import type { FlexProps } from "../Flex/Flex.types"

export interface ColumnProps extends FlexProps {
	className?: string
	children: React.ReactNode
	isColumnCentered?: boolean
	width: number
}
