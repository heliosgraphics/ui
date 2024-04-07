import type { HeliosOnClickType, HeliosAttributeMeta, HeliosChildrenType } from "../.."

export interface DialogProps {
	children: HeliosChildrenType
	isOpen?: boolean
	isCentered?: boolean
	onClose: (_?: unknown) => Promise<void> | void
	onClick?: HeliosOnClickType
	title?: string
}

export const meta: HeliosAttributeMeta<DialogProps> = {
	_status: "nominal",
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
