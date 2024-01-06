import type { FUITypographyUtility } from "@heliosgraphics/library/types/typography"

export interface TextProps extends FUITypographyUtility {
	children: React.ReactNode
	type: "tiny" | "small" | "paragraph" | "div"
	withLinks?: boolean
}
