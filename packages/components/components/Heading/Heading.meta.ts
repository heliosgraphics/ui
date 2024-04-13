import type { HeliosAttributeMeta } from "../.."
import type { HeadingBaseProps } from "./Heading.types"

export const meta: HeliosAttributeMeta<HeadingBaseProps> = {
	_extends: ['Omit<BaseTextProps, "type">', "HTMLAttributes<HTMLHeadingElement>"],
	_status: "stable",
	_type: "content",
	level: {
		type: "0 | 1 | 2 | 3 | 4 | 5 | 6",
	},
}
