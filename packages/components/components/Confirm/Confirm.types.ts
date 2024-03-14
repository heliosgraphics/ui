import type { HeliosIconType, HeliosIntentionType, HeliosAttributeMeta } from "../.."

export interface ConfirmProps {
	cancelText: string
	confirmText: string
	description?: string
	icon?: HeliosIconType
	intent: HeliosIntentionType
	isOpen: boolean
	onCancel: (_?: unknown) => Promise<void> | void
	onConfirm: (_?: unknown) => Promise<void> | void
	title: string
}

export const meta: HeliosAttributeMeta<ConfirmProps> = {
	cancelText: {
		type: "string",
	},
	confirmText: {
		type: "string",
	},
	description: {
		type: "string",
		isOptional: true,
	},
	icon: {
		type: "HeliosIconType",
		isOptional: true,
	},
	intent: {
		type: "HeliosIntentionType",
	},
	isOpen: {
		type: "boolean",
	},
	onCancel: {
		type: "(_?: unknown) => Promise<void> | void",
	},
	onConfirm: {
		type: "(_?: unknown) => Promise<void> | void",
	},
	title: {
		type: "string",
	},
}
