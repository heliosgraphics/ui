import type { FlexProps } from "./Flex.types"
import type { MainProps } from "../Main/Main.types"
import type { ColumnProps } from "../Column/Column.types"
import type { NavigationProps } from "../Navigation/Navigation.types"
import type { ResponsiveScaleType } from "./Flex.types"

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

	// Responsive Scales
	const gapPadding: string = getPadding(props.padding)

	if (props.padding) flexClasses.add(gapPadding)
	if (props.gap) flexClasses.add(`gap-${props.gap}`)
	if (props.paddingY) flexClasses.add(`py-${props.paddingY}`)
	if (props.paddingX) flexClasses.add(`px-${props.paddingX}`)

	if (props.onClick) flexClasses.add("cursor-pointer")
	if (props.className) flexClasses.add(props.className)

	if (props.withRadius) flexClasses.add(`radius-${props.withRadius}`)
	if (props.withBackground) flexClasses.add("helios-ui-bg")

	return Array.from(flexClasses).join(" ")
}

export const getPadding = (paddingValue?: ResponsiveScaleType): string => {
	if (!paddingValue) return ""

	const isArray: boolean = Boolean(paddingValue && paddingValue instanceof Array)
	const paddingClasses = new Set<string>()

	if (!isArray) return `p-${paddingValue}`

	for (let index = 0; index < 3; index++) {
		const element = paddingValue[index]

		if (index === 0) paddingClasses.add(`mobile:p-${element ?? 0}`)
		if (index === 1) paddingClasses.add(`tablet:p-${element ?? 0}`)
		if (index === 2) paddingClasses.add(`p-${element ?? 0}`)
	}

	return Array.from(paddingClasses).join(" ")
}

export const getSafeFlexProps = (props: any = { children: null }): Partial<FlexProps> => {
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

		// random
		withBackground,
		withAlternativeBackground,
		withRadius,
		isColumnCentered,
		offsetTop,
		...safeProps
	} = props

	return safeProps
}
