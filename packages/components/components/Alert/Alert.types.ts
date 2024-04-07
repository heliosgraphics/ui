import type { HeliosChildrenType, HeliosIconType, HeliosIntentionType, HeliosAttributeMeta } from "../.."

export interface AlertProps {
	children: HeliosChildrenType
	icon?: HeliosIconType
	intent: HeliosIntentionType
	onClose?: (event?: unknown) => void
	title?: string
}

export const meta: HeliosAttributeMeta<AlertProps> = {
	_status: "stable",
	_type: "pattern",
	children: {
		type: "HeliosChildrenType",
	},
	icon: {
		type: "HeliosIconType",
		isOptional: true,
	},
	intent: {
		type: "HeliosIntentionType",
	},
	onClose: {
		type: "(event?: unknown) => void",
		isOptional: true,
	},
	title: {
		type: "string",
		isOptional: true,
	},
}
