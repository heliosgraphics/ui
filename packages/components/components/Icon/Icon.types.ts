import type { HeliosIconType } from "../.."
import type { HeliosEmphasisType } from "../../types/intentions"

export interface IconProps {
	className?: string
	name: HeliosIconType
	emphasis?: HeliosEmphasisType
	size: number
}
