import type { HeliosAttributeMeta } from "../.."
import type { ConfirmProps } from "./Confirm.types"

export const meta: HeliosAttributeMeta<ConfirmProps> = {
	_patterns: [
		{
			id: "ui-confirm-delete",
			description: "confirm deletion dialog",
			content: `<Confirm cancelText="Cancel" confirmText="Delete" description="Are you sure you want to delete?" icon="trash" intent="danger" isOpen={IS_OPEN} onCancel={FUNCTION_CLOSE} onConfirm={FUNCTION_CLOSE} title="Confirm Deletion"/>`,
		},
	],
	_status: "stable",
	_type: "pattern",
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
