import { HeliosScale } from "packages/components/types/scale"
import type { FlexProps } from "./Flex.types"
// import type { MainProps } from "../Main/Main.types"
// import type { ColumnProps } from "../Column/Column.types"
// import type { NavigationProps } from "../Navigation/Navigation.types"
import type { ResponsiveScaleType, ResponsiveRadiusType } from "./Flex.types"

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
	if (props.onClick) flexClasses.add("cursor-pointer")

	// Responsive Radius
	const responsiveRadius = getRadius(props.withRadius)

	if (props.withRadius) flexClasses.add(responsiveRadius)

	// Responsive Scales
	const responsivePadding: string = getPadding(props.padding)

	if (props.padding) flexClasses.add(responsivePadding)
	if (props.gap) flexClasses.add(`gap-${props.gap}`)
	if (props.paddingY) flexClasses.add(`py-${props.paddingY}`)
	if (props.paddingX) flexClasses.add(`px-${props.paddingX}`)

	if (props.className) flexClasses.add(props.className)
	if (props.withBackground) flexClasses.add("helios-ui-bg")

	return Array.from(flexClasses).join(" ")
}

export const getPadding = (paddingValue?: ResponsiveScaleType): string => {
	if (!paddingValue) return ""

	const isArray: boolean = Boolean(paddingValue && paddingValue instanceof Array)
	const paddingClasses = new Set<string>()

	if (!isArray) return `p-${paddingValue}`

	for (let index = 0; index < 3; index++) {
		const element = <Array<HeliosScale>>paddingValue[index]

		if (index === 0) paddingClasses.add(`mobile:p-${element ?? 0}`)
		if (index === 1) paddingClasses.add(`tablet:p-${element ?? 0}`)
		if (index === 2) paddingClasses.add(`p-${element ?? 0}`)
	}

	return Array.from(paddingClasses).join(" ")
}

// WIP duplicated above for now
export const getRadius = (radiusValue?: ResponsiveRadiusType): string => {
	if (!radiusValue) return ""

	const isArray: boolean = Boolean(radiusValue && radiusValue instanceof Array)
	const radiusClasses = new Set<string>()

	if (!isArray) return `radius-${radiusValue}`

	for (let index = 0; index < 3; index++) {
		const element = radiusValue[index]

		if (index === 0 && !!element) radiusClasses.add(`mobile:radius-${element}`)
		if (index === 1 && !!element) radiusClasses.add(`tablet:radius-${element}`)
		if (index === 2 && !!element) radiusClasses.add(`radius-${element}`)
	}

	return Array.from(radiusClasses).join(" ")
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
		withGlass,
		isColumnCentered,
		offsetTop,
		...safeProps
	} = props

	return safeProps
}
