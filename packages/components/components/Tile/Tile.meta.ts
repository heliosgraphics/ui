import type { HeliosAttributeMeta } from "../.."
import type { TileProps } from "./Tile.types"

export const meta: HeliosAttributeMeta<TileProps> = {
	_status: "stable",
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
