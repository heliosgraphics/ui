import type { HeliosOnClickType } from "../.."

export interface BreadCrumbItem {
	isActive?: boolean
	name: string
	href: string
	onClick?: HeliosOnClickType
}

export interface BreadcrumbProps {
	items: Array<BreadCrumbItem>
}
