import React from "react"
import type { HeliosIconType } from "@heliosgraphics/icons/meta"
import type { HeliosIntentionType } from "../../types/intentions"

export interface AlertProps {
	children: React.ReactNode
	icon?: HeliosIconType
	onClose?: () => void
	title?: string
	intent: HeliosIntentionType
}
