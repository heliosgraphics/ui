import React from "react"
import classNames from "@sindresorhus/class-names"
import { getColor } from "../utils/color"
import { getFlexUtility } from "@heliosgraphics/library/utils/flex"
import type { FlexProps } from "./Flex.types"

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
	(props: FlexProps, ref: React.Ref<HTMLDivElement>) => {
		const backgroundColor = getColor(props.backgroundColor)
		const fuiFlexClasses: string = getFlexUtility(props)

		const flexClasses: string = classNames(props.className, fuiFlexClasses, {
			[`bg-${backgroundColor}`]: !!backgroundColor,
			// TODO @chris Move this one to fracture utils too
			"flex-stretch": props.isStretch,
		})

		const {
			backgroundColor: bg,
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
