import type { FlexProps } from "./Flex.types"

export const getFlexUtility = (props?: FlexProps): string => {
	if (!props) return "flex"

	const flexClasses = new Set<string>()
	const flexBase = props?.isInline ? "inline-flex" : "flex"

	flexClasses.add(flexBase)

	if (props.isStretch) flexClasses.add("flex-stretch")
	if (props.isCentered) flexClasses.add("flex-center")
	if (props.isColumn) flexClasses.add("flex-column")
	if (props.isWrapping) flexClasses.add("flex-wrap")
	if (props.isYCentered) flexClasses.add("flex-y-center")
	if (props.isXCentered) flexClasses.add("flex-x-center")
	if (props.yAlign === "baseline") flexClasses.add("flex-baseline")
	if (props.yAlign === "top") flexClasses.add("flex-top")
	if (props.yAlign === "bottom") flexClasses.add("flex-bottom")
	if (props.align === "left") flexClasses.add("flex-left")
	if (props.align === "right") flexClasses.add("flex-right")
	if (props.isBetween) flexClasses.add("space-between")
	if (props.isAround) flexClasses.add("space-around")

	if (props.gap) flexClasses.add(`gap-${props.gap}`)
	if (props.padding) flexClasses.add(`p-${props.padding}`)
	if (props.paddingY) flexClasses.add(`py-${props.paddingY}`)
	if (props.paddingX) flexClasses.add(`px-${props.paddingX}`)
	if (props.radius) flexClasses.add(`radius-${props.radius}`)

	if (props.onClick) flexClasses.add("cursor-pointer")

	if (props.className) flexClasses.add(props.className)

	return Array.from(flexClasses).join(" ")
}
