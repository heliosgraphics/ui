import type { TextProps } from "../Text/Text.types"

export interface HeadingProps extends TextProps {
	level: 0 | 1 | 2 | 3 | 4 | 5 | 6
}
