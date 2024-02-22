import type { HeliosChildrenType } from "../.."
import type { HeliosIconType } from "../.."
import type { HeliosIntentionType } from "../../types/intentions"

export interface AlertProps {
	children: HeliosChildrenType
	icon?: HeliosIconType
	onClose?: (event?: unknown) => void
	title?: string
	intent: HeliosIntentionType
}
