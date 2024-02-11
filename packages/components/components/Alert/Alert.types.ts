import type { ReactNode } from "react"
import type { HeliosIconType } from "../.."
import type { HeliosIntentionType } from "../../types/intentions"

export interface AlertProps {
	children: ReactNode
	icon?: HeliosIconType
	onClose?: () => void
	title?: string
	intent: HeliosIntentionType
}
