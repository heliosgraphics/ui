import type { HeliosAttributeMeta } from "../.."
import type { DialogProps } from "./Dialog.types"

export const meta: HeliosAttributeMeta<DialogProps> = {
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
