import type { MouseEvent, SyntheticEvent } from "react"
import type { HeliosIntentionType } from "../../types/intentions"
import type { HeliosIconType, HeliosOnClickType } from "../.."

export interface ButtonProps {
	accept?: string
	flair?: number
	icon?: HeliosIconType
	intent: HeliosIntentionType
	isDisabled?: boolean
	isIconOnly?: boolean
	isLoading?: boolean
	isRounded?: boolean
	onClick?: HeliosOnClickType
	onChange?: (event?: MouseEvent | SyntheticEvent) => Promise<void> | void
	size?: "normal" | "small" | "tiny"
	tabIndex?: number
	type?: "button" | "submit" | "file"
	value: string
}
