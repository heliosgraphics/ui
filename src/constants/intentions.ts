import type { HeliosColors } from '../types/colors'
import type { HeliosIntentionType } from '../types/intentions'

export const INTENTION_COLOR_MAP: Record<HeliosIntentionType, HeliosColors> = {
	"highlight": "orange",
	"success": "green",
	"error": "red",
	"warning": "yellow",
	"info": "blue",
	"note": "gray",
}
