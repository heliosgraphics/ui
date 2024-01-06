import type { FUIFlexProps } from "@heliosgraphics/library/types/flex"

export interface ColumnProps extends FUIFlexProps {
	className?: string
	children: React.ReactNode
	isColumnCentered?: boolean
	width: number
}
