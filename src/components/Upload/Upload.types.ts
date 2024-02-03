import type { HeliosIconType } from "@heliosgraphics/icons/meta"
import type { ChangeEvent, RefObject } from "react"

export interface UploadProps {
	accept?: string
	fileValue?: string
	icon?: HeliosIconType
	id?: string
	isSmall?: boolean
	isDisabled?: boolean
	isRequired?: boolean
	ref?: RefObject<HTMLInputElement>
	isLoading?: boolean
	label?: string
	multiple?: boolean
	name?: string
	onChange?: (event?: ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
	value?: string
}
