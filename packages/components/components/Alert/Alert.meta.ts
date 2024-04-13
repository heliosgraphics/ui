import type { HeliosAttributeMeta } from "../.."
import type { AlertProps } from "./Alert.types"

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
