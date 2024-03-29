import type { HeliosOnClickType, HeliosAttributeMeta } from "../.."

export interface BreadCrumbItem {
	isActive?: boolean
	name: string
	href: string
	onClick?: HeliosOnClickType
}

export interface BreadcrumbProps {
	items: Array<BreadCrumbItem>
}

export const meta: HeliosAttributeMeta<BreadcrumbProps> = {
	items: {
		type: "Array<BreadCrumbItem>",
	},
}
