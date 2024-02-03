import type { FUIColorScale } from "@heliosgraphics/library/types/colors"

export interface PillProps {
	color: FUIColorScale
	isDark?: boolean
	isSmall?: boolean
	isMono?: boolean
	isRounded?: boolean
	label: string
}
