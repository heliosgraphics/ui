import type { HeliosAttributeMeta } from "../.."
import type { BreadcrumbProps } from "./Breadcrumb.types"

export const meta: HeliosAttributeMeta<BreadcrumbProps> = {
	_status: "nominal",
	_type: "content",
	items: {
		type: "Array<BreadCrumbItem>",
	},
}
