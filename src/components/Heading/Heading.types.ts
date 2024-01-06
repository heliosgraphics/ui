import type { FUITypographyUtility } from "@heliosgraphics/library/types/typography"

export interface HeadingProps extends FUITypographyUtility {
	level: 0 | 1 | 2 | 3 | 4 | 5 | 6
	lineClamp?: number
}
