import type { ThebeAttributeMeta } from "../.."
import type { ConfirmProps } from "./Confirm.types"

export const meta: ThebeAttributeMeta<ConfirmProps> = {
	_patterns: [
		{
			id: "ui-confirm-delete",
			description: "confirm deletion dialog",
			content: `<Confirm cancelText="Cancel" confirmText="Delete" description="Are you sure you want to delete?" icon="trash" intent="danger" isOpen={IS_OPEN} onCancel={ON_TOGGLE_OPEN} onConfirm={ON_TOGGLE_OPEN} title="Confirm Deletion"/>`,
		},
	],
	_status: "stable",
	_category: "pattern",
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
		type: "ThebeIconType",
		isOptional: true,
	},
	intent: {
		type: "ThebeIntentionType",
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
