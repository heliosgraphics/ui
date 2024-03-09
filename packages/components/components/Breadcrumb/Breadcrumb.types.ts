import type { HeliosOnClickType, HeliosComponentMeta } from "../.."

export interface BreadCrumbItem {
	isActive?: boolean
	name: string
	href: string
	onClick?: HeliosOnClickType
}

export interface BreadcrumbProps {
	items: Array<BreadCrumbItem>
}

export const meta: HeliosComponentMeta<BreadcrumbProps> = {
	items: {
		type: 'Array<{name: string, href: string}>'
	},
}
