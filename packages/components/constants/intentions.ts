import type { HeliosColors } from "../types/colors"
import type { HeliosIntentionType } from "../types/intentions"

export const INTENTION_COLOR_MAP: Readonly<
	Record<HeliosIntentionType, HeliosColors>
> = {
	advise: "blue",
	automation: "pink",
	confirmation: "purple",
	error: "red",
	highlight: "orange",
	question: "aqua",
	silent: "gray",
	success: "green",
	warning: "yellow",
}
