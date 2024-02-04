import type { ReactNode } from "react"
import type { HeliosIntentionType } from "../../types/intentions"

export interface FormProps {
	alert?: ReactNode | string
	alertType?: HeliosIntentionType
	children: ReactNode
	className?: string
	buttonGroup?: ReactNode
	onSubmit: (_: unknown) => Promise<void | unknown> | void | unknown
}
