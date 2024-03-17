import type { MouseEvent, SyntheticEvent } from "react"

import type { HeliosIntentionType, HeliosIconType, HeliosAttributeMeta, HeliosOnClickType, HeliosSizeType } from "../.."

export interface ButtonProps {
	accept?: string
	flair?: number
	icon?: HeliosIconType
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

export const meta: HeliosAttributeMeta<ButtonProps> = {
	accept: {
		type: "string",
		isOptional: true,
	},
	flair: {
		type: "number",
		isOptional: true,
	},
	icon: {
		type: "HeliosIconType",
		isOptional: true,
	},
	intent: {
		type: "HeliosIntentionType",
	},
	isDisabled: {
		type: "boolean",
		isOptional: true,
	},
	isIconOnly: {
		type: "boolean",
		isOptional: true,
	},
	isLoading: {
		type: "boolean",
		isOptional: true,
	},
	isRounded: {
		type: "boolean",
		isOptional: true,
	},
	onChange: {
		type: "(event?: MouseEvent | SyntheticEvent) => Promise<void> | void",
		isOptional: true,
	},
	onClick: {
		type: "HeliosOnClickType",
		isOptional: true,
	},
	size: {
		type: '"normal" | "small" | "tiny"',
		isOptional: true,
		default: "normal",
	},
	tabIndex: {
		type: "number",
		isOptional: true,
	},
	type: {
		type: '"button" | "submit" | "file',
		isOptional: true,
		default: "button",
	},
	value: {
		type: "string",
	},
}
