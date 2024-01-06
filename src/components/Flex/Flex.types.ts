import type { FUIColors } from "@heliosgraphics/library/types/colors"
import type { FUIFlexProps } from "@heliosgraphics/library/types/flex"
import React from "react"

export interface FlexProps extends FUIFlexProps, React.HTMLAttributes<{}> {
	backgroundColor?: FUIColors
	isStretch?: boolean
	draggable?: boolean
	onClick?: (event: any) => void
	ref?: React.RefObject<HTMLDivElement>
}
