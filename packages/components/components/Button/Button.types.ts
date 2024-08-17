import type { MouseEvent, SyntheticEvent } from "react"
import type { HeliosIntentionType, HeliosIconType, HeliosAttributeMeta, HeliosOnClickType, HeliosSizeType } from "../.."

export interface ButtonProps {
	accept?: string
	flair?: number
	icon?: HeliosIconType
	iconLeft?: HeliosIconType
	iconRight?: HeliosIconType
	intent: HeliosIntentionType
	isDisabled?: boolean
	isIconOnly?: boolean
	isLoading?: boolean
	isRounded?: boolean
	onChange?: (event?: MouseEvent | SyntheticEvent) => Promise<void> | void
	onClick?: HeliosOnClickType
	size?: HeliosSizeType
	tabIndex?: number
	type?: "button" | "submit" | "file"
	value: string
}
