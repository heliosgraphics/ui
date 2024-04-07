import type { HeliosAttributeMeta } from "../.."

export interface MarkdownProps {
	isNonSelectable?: boolean
	text: string
}

export const meta: HeliosAttributeMeta<MarkdownProps> = {
	_status: "stable",
	_type: "content",
	isNonSelectable: {
		type: "boolean",
		isOptional: true,
	},
	text: {
		type: "string",
	},
}
