import type { HeliosIconType, HeliosColors, HeliosOnClickType, HeliosAttributeMeta } from "../.."

export interface TileProps {
	color: HeliosColors
	colorAccent?: HeliosColors
	icon: HeliosIconType
	iconAccent?: HeliosIconType
	isRound?: boolean
	isRounded?: boolean
	onClick?: HeliosOnClickType
	size: number
	text?: string
}

export const meta: HeliosAttributeMeta<TileProps> = {
	_status: "nominal",
	_type: "pattern",
	color: { type: "HeliosColors" },
	colorAccent: { type: "HeliosColors", isOptional: true },
	icon: { type: "HeliosIconType" },
	iconAccent: { type: "HeliosIconType", isOptional: true },
	isRound: { type: "boolean", isOptional: true },
	isRounded: { type: "boolean", isOptional: true },
	onClick: { type: "HeliosOnClickType", isOptional: true },
	size: { type: "number" },
	text: { type: "string", isOptional: true },
}
