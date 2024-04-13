import type { HeliosAttributeMeta } from "../.."
import type { TimestampProps } from "./Timestamp.types"

export const meta: HeliosAttributeMeta<TimestampProps> = {
	_status: "nominal",
	_type: "content",
	date: { type: "string", isOptional: true },
	format: { type: "string", isOptional: true, default: "MMMM D, YYYY" },
	fromNow: { type: "boolean", isOptional: true },
	text: { type: "string", isOptional: true },
}
