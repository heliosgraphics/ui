export interface BreadCrumbItem {
	isActive?: boolean
	name: string
	href: string
	onClick?: (_?: unknown) => void
}

export interface BreadcrumbProps {
	items: Array<BreadCrumbItem>
}
