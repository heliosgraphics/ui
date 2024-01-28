export interface BreadCrumbItem {
	isActive?: boolean
	name: string
	href: string
}

export interface BreadcrumbProps {
	items: Array<BreadCrumbItem>
}
