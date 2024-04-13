import type { HeliosChildrenType } from "../.."

export interface ButtonGroupProps {
	align?: "left" | "center" | "right" | "join"
	className?: string
	children: HeliosChildrenType
	isVertical?: boolean
}
