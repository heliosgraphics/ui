import type { TextProps, BaseTextProps } from "../Text/Text.types"

export interface BaseHeadingProps extends BaseTextProps {}
export interface HeadingProps extends BaseHeadingProps, Omit<TextProps, "type" | "style"> {
	level: 0 | 1 | 2 | 3 | 4 | 5 | 6
}
