export interface BreadCrumb {
	isActive?: boolean
	name: string
	href: string
}

export interface BreadcrumbProps {
	items: Array<BreadCrumb>
}
