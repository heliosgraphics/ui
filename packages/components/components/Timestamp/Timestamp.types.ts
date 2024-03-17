import type { HeliosAttributeMeta } from "../.."

export interface TimestampProps {
	date?: string
	format?: string
	fromNow?: boolean
	text?: string
}

export const meta: HeliosAttributeMeta<TimestampProps> = {
	date: { type: "string", isOptional: true },
	format: { type: "string", isOptional: true, default: "MMMM D, YYYY" },
	fromNow: { type: "boolean", isOptional: true },
	text: { type: "string", isOptional: true },
}
