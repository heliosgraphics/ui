import type { HeliosAttributeMeta } from "../.."
import type { FlexBaseProps } from "./Flex.types"

// prettier-ignore
export const meta: HeliosAttributeMeta<FlexBaseProps> = {
	_status: 'stable',
	_type: 'core',
	_extends: ["HTMLAttributes<unknown>"],
	children: { type: "HeliosChildrenType" },
	className: { type: "string", isOptional: true, },
	draggable: { type: "boolean", isOptional: true, },
	gap: { type: "HeliosScale", isOptional: true, },
	isAround: { type: "boolean", isOptional: true, },
	isBetween: { type: "boolean", isOptional: true, },
	isCentered: { type: "boolean", isOptional: true, },
	isColumn: { type: "boolean", isOptional: true, },
	isInline: { type: "boolean", isOptional: true, },
	isStretch: { type: "boolean", isOptional: true, },
	isWrapping: { type: "boolean", isOptional: true, },
	isXCentered: { type: "boolean", isOptional: true, },
	isYCentered: { type: "boolean", isOptional: true, },
	onClick: { type: "HeliosOnClickType", isOptional: true, },
	padding: { type: "ResponsiveScaleType", isOptional: true, },
	paddingX: { type: "HeliosScale", isOptional: true, },
	paddingY: { type: "HeliosScale", isOptional: true, },
	ref: { type: "RefObject<HTMLDivElement>", isOptional: true, },
	withBackground: { type: "boolean", isOptional: true, },
	withRadius: { type: "ResponsiveRadiusType", isOptional: true, },
	xAlign: { type: '"start" | "end" | "center"', isOptional: true, },
	yAlign: { type: '"start" | "end" | "baseline"', isOptional: true, },
}
