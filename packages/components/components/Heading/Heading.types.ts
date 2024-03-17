import type { HTMLAttributes } from "react"
import type { TextBaseProps, HeliosAttributeMeta } from "../.."

interface HeadingBaseProps {
	level: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

export type HeadingProps = HeadingBaseProps & Omit<TextBaseProps, "type"> & HTMLAttributes<HTMLHeadingElement>

export const meta: HeliosAttributeMeta<HeadingBaseProps> = {
	_extends: ['Omit<BaseTextProps, "type">', "HTMLAttributes<HTMLHeadingElement>"],
	level: {
		type: "0 | 1 | 2 | 3 | 4 | 5 | 6",
	},
}
