import React from "react"
import type { HeliosIntentionType } from "../../types/intentions"
import type { HeliosIconType } from "@heliosgraphics/icons/meta"

export interface ButtonProps {
	flair?: string
	icon?: HeliosIconType
	intent: HeliosIntentionType
	isActive?: boolean
	isDisabled?: boolean
	isIconOnly?: boolean
	isLoading?: boolean
	isRounded?: boolean
	onClick?: (event?: React.MouseEvent | React.SyntheticEvent) => void
	size?: "normal" | "small" | "tiny"
	tabIndex?: number
	type?: 'button' | 'submit'
	value: string
}
