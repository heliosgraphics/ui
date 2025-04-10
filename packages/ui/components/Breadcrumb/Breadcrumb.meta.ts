import type { ThebeAttributeMeta } from "../.."
import type { BreadcrumbProps } from "./Breadcrumb.types"

export const meta: ThebeAttributeMeta<BreadcrumbProps> = {
	_patterns: [
		{
			id: "ui-breadcrumb-default",
			description: "default",
			content: "<Breadcrumb items={BREADCRUMB_ITEMS} />",
		},
	],
	_status: "nominal",
	_category: "content",
	items: {
		type: "Array<BreadCrumbItem>",
	},
}
