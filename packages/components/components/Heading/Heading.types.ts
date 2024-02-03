import type { TextProps, BaseTextProps } from "../Text/Text.types"
import type { HTMLAttributes } from 'react'

export interface BaseHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	style?: object
}

export interface HeadingProps extends BaseHeadingProps, Omit<TextProps, "type" | "style"> {
	level: 0 | 1 | 2 | 3 | 4 | 5 | 6
}
