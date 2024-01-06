import React from "react"
import type {
	FUIColors,
	FUIColorScale,
} from "@heliosgraphics/library/types/colors"
import type { HeliosIconType } from "@heliosgraphics/icons/meta"

export interface ButtonProps {
	color?: FUIColorScale
	icon?: HeliosIconType
	flair?: FUIColors
	// iconPosition?: 'left' | 'right';
	isActive?: boolean
	isDisabled?: boolean
	isIconOnly?: boolean
	isLoading?: boolean
	isRounded?: boolean
	tabIndex?: number
	onClick?: (event?: React.MouseEvent | React.SyntheticEvent) => void
	size?: "normal" | "small" | "tiny"
	type: "primary" | "secondary" | "silent" | "opaque"
	value: string
}
