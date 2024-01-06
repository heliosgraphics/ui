import React from "react"
import type { HeliosIntentType } from "@heliosgraphics/library/types/intent"

export interface FormProps {
	alert?: React.ReactNode | string
	alertType?: HeliosIntentType
	children: React.ReactNode
	className?: string
	buttonGroup?: React.ReactNode
	onSubmit: (_: unknown) => Promise<void | unknown> | void | unknown
}
