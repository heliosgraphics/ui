import type { HeliosIconType } from "@heliosgraphics/icons/meta"
import React from "react"

export interface UploadProps {
	accept?: string
	fileValue?: string
	icon?: HeliosIconType
	id?: string
	isSmall?: boolean
	isDisabled?: boolean
	isRequired?: boolean
	ref?: React.RefObject<HTMLInputElement>
	isLoading?: boolean
	label?: string
	multiple?: boolean
	name?: string
	onChange?: (event?: React.ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
	value?: string
}
