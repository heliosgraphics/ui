import type { FlexProps } from "../Flex/Flex.types"
import type { ReactNode } from 'react'

export interface ColumnProps extends FlexProps {
	className?: string
	children: ReactNode
	isColumnCentered?: boolean
	width: number
}
