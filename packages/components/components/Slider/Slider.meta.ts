import type { HeliosAttributeMeta } from "../.."
import type { SliderProps } from "./Slider.types"

export const meta: HeliosAttributeMeta<SliderProps> = {
	_status: "experimental",
	_type: "pattern",
	items: {
		type: "Array<ReactNode>",
		isOptional: true,
	},
}
