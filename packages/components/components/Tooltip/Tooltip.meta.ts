import type { HeliosAttributeMeta } from "../.."
import type { TooltipProps } from "./Tooltip.types"

export const meta: HeliosAttributeMeta<TooltipProps> = {
	_status: "experimental",
	_type: "core",
	position: {
		type: "'left' | 'right' | 'top' | 'bottom'",
		isOptional: true,
	},
}
