import type { HeliosIconType } from "@heliosgraphics/icons/meta"
import type { HeliosEmphasisType } from "../../types/intentions"

export interface IconProps {
	className?: string
	name: HeliosIconType
	emphasis?: HeliosEmphasisType
	size: number
}
