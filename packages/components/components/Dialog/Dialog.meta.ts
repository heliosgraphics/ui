import type { HeliosAttributeMeta } from "../.."
import type { DialogProps } from "./Dialog.types"

export const meta: HeliosAttributeMeta<DialogProps> = {
	_patterns: [
		{
			id: "ui-dialog-default",
			description: "default",
			content: `<Dialog onClose={FUNCTION_CLOSE} title="Edit User" isOpen={IS_OPEN} isCentered={IS_CENTERED}>{CHILDREN}</Dialog>`,
		},
	],
	_status: "stable",
	_type: "pattern",
	children: {
		type: "HeliosChildrenType",
	},
	isOpen: {
		type: "boolean",
		isOptional: true,
	},
	isCentered: {
		type: "boolean",
		isOptional: true,
	},
	onClose: {
		type: "(_?: unknown) => Promise<void> | void",
	},
	onClick: {
		type: "HeliosOnClickType",
		isOptional: true,
	},
	title: {
		type: "string",
		isOptional: true,
	},
}
