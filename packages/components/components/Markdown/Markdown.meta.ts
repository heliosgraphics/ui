import type { HeliosAttributeMeta } from "../.."
import type { MarkdownProps } from "./Markdown.types"

export const meta: HeliosAttributeMeta<MarkdownProps> = {
	_patterns: [
		{
			id: "ui-markdown-default",
			description: "default",
			content: `<Markdown text={MARKDOWN}/>`,
		},
	],
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
