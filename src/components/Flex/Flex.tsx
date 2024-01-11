import React from "react"
import { getFlexUtility } from "./Flex.utils"
import type { FlexProps } from "./Flex.types"

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
	(props: FlexProps, ref: React.Ref<HTMLDivElement>) => {
		const flexClasses: string = getFlexUtility(props)

		const {
			gap,
			isBetween,
			isCentered,
			isColumn,
			isInline,
			isWrapping,
			isXCentered,
			isYCentered,
			isStretch,
			yAlign,
			padding,
			paddingX,
			paddingY,
			...safeProps
		} = props

		return (
			<div
				{...safeProps}
				className={flexClasses}
				onClick={props.onClick}
				ref={ref}
			>
				{props.children}
			</div>
		)
	},
)

Flex.displayName = "Flex"

export default Flex
