export interface BreadCrumbItem {
	isActive?: boolean
	name: string
	href: string
	onClick: () => void
}

export interface BreadcrumbProps {
	items: Array<BreadCrumbItem>
}
