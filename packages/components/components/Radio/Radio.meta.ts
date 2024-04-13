import type { HeliosAttributeMeta } from "../.."
import type { RadioProps } from "./Radio.types"

export const meta: HeliosAttributeMeta<RadioProps> = {
	_status: "stable",
	_type: "core",
	id: {
		type: "string",
		isOptional: true,
	},
	intent: {
		type: "HeliosIntentionType",
	},
	isDisabled: {
		type: "boolean",
		isOptional: true,
	},
	isSmall: {
		type: "boolean",
		isOptional: true,
	},
	label: {
		type: "string",
	},
	onChange: {
		type: "(event?: ChangeEvent) => Promise<void> | void",
		isOptional: true,
	},
	state: {
		type: "string",
	},
	value: {
		type: "string",
	},
}
