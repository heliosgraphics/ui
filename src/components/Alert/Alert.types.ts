import React from "react"
import type { HeliosIconType } from "@heliosgraphics/icons/meta"
import type { HeliosIntentType } from "@heliosgraphics/library/types/intent"

export interface AlertProps {
	children: React.ReactNode
	icon: HeliosIconType
	onClose?: () => void
	title?: string
	type: HeliosIntentType
}
