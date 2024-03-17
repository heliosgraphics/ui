import type { ChangeEvent } from "react"
import type { HeliosIntentionType, HeliosAttributeMeta } from "../.."

export interface RadioProps {
	id?: string
	intent: HeliosIntentionType
	isDisabled?: boolean
	isSmall?: boolean
	label: string
	onChange?: (event?: ChangeEvent) => Promise<void> | void
	state: string
	value: string
}

export const meta: HeliosAttributeMeta<RadioProps> = {
	id: {
		type: "string",
		isOptional: true
	},
	intent: {
		type: "HeliosIntentionType",
	},
	isDisabled: {
		type: "boolean",
		isOptional: true
	},
	isSmall: {
		type: "boolean",
		isOptional: true
	},
	label: {
		type: "string",
	},
	onChange: {
		type: "(event?: ChangeEvent) => Promise<void> | void",
		isOptional: true
	},
	state: {
		type: "string",
	},
	value: {
		type: "string",
	},
}
