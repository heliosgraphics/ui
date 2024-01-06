import { getColor } from "../utils/color"
import { getTypographyUtility as getFUITypographyUtility } from "@heliosgraphics/library/utils/typography"
import type { FUITypographyUtility } from "@heliosgraphics/library/types/typography"

export const getTypographyUtility = (
	props: FUITypographyUtility,
	isHeader?: boolean,
): string => {
	const typoClasses: Array<string> = getFUITypographyUtility(props).split(" ")

	// Classname
	if (props.className) typoClasses.push(props.className)

	// Colors
	const defaultColor = isHeader ? "fui-color-800" : "fui-color-700"
	const color: string | undefined = getColor(props.color)

	if (!!color) typoClasses.push(color)
	else typoClasses.push(defaultColor)

	return typoClasses.join(" ")
}

// import type { FUITypographyUtility } from '../types/typography'

// export const _getFontWeight = (fw: FUITypographyUtility['fontWeight']): string => {
//   switch (fw) {
//     case 'thin': return 'fw-thin';
//     case 'extra-light': return 'fw-extra-light';
//     case 'light': return 'fw-light';
//     case 'normal': return 'fw-normal';
//     case 'medium': return 'fw-medium';
//     case 'semibold': return 'fw-semi-bold';
//     case 'bold': return 'fw-bold';
//     case 'extra-bold': return 'fw-extra-bold';
//     case 'black': return 'fw-black';

//     default: return '';
//   }
// }

// export const getTypographyUtility = (props: FUITypographyUtility, className?: string): string => {
//   const typoClasses: Array<string> = []

//   const fontFamily = props.fontFamily ? props.fontFamily : "sans"
//   const fontWeight = _getFontWeight(props.fontWeight)

//   typoClasses.push(fontFamily)
//   typoClasses.push(fontWeight)

//   if (className) typoClasses.push(className)
//   if (props.fontStyle) typoClasses.push(props.fontStyle)
//   if (props.isEllipsis) typoClasses.push("ellipsis")
//   if (props.isUnselectable) typoClasses.push("unselectable")
//   if (props.textAlign) typoClasses.push(props.textAlign)
//   if (props.textDecoration) typoClasses.push(props.textDecoration)
//   if (props.whiteSpace) typoClasses.push(props.whiteSpace)
//   if (props.wordWrap) typoClasses.push(props.wordWrap)

//   return typoClasses.join(" ")
// }
