import type { ReactNode } from "react"
import type { HeliosIntentType } from "@heliosgraphics/library/types/intent"

export interface FormProps {
	alert?: ReactNode | string
	alertType?: HeliosIntentType
	children: ReactNode
	className?: string
	buttonGroup?: ReactNode
	onSubmit: (_: unknown) => Promise<void | unknown> | void | unknown
}
