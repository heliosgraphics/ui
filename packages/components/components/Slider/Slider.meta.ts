import type { HeliosAttributeMeta } from "../.."
import type { SliderProps } from "./Slider.types"

export const meta: HeliosAttributeMeta<SliderProps> = {
	_patterns: [
		{
			id: "ui-slider-default",
			description: "default",
			content: `<Slider/>`,
		},
	],
	_status: "experimental",
	_type: "pattern",
	items: {
		type: "Array<ReactNode>",
		isOptional: true,
	},
}
