import { Flex, Breadcrumb, type BreadCrumbItem } from "@heliosgraphics/ui"
import Page from "../Page"

export default function Home({ children, params }) {
	const { component } = params
	if (!component) return null

	const BREADCRUMB_ITEMS: Array<BreadCrumbItem> = [
		{ name: "Components", href: "/" },
		{ name: component, href: `/components/${component}`, isActive: true },
	]

	return (
		<>
			<Page title={component} breadcrumb={<Breadcrumb items={BREADCRUMB_ITEMS} />}></Page>
			{children}
		</>
	)
}
