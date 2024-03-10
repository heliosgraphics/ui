import { lazy } from "react"
import WorkshopControls from "../../components/WorkshopControls"
import { Flex, Breadcrumb, type BreadCrumbItem } from "@heliosgraphics/ui"
import Page from "../Page"

export default function Home({ params }) {
	const { component } = params
	if (!component) return null

	const DemoComponent = lazy(() => import(`./components/Example${component}`))
	if (!DemoComponent) return null

	const BREADCRUMB_ITEMS: Array<BreadCrumbItem> = [
		{ name: "Components", href: "/" },
		{ name: component, href: `/components/${component}`, isActive: true },
	]

	return (
		<>
			<Page title={component} breadcrumb={<Breadcrumb items={BREADCRUMB_ITEMS} />}></Page>
			<Flex isColumn={true} gap={0} withBackground={true} className="relative pb-48">
				{/* <Flex isColumn={true} gap={16} padding={16}>
					<Heading level={2}>{component}</Heading>
				</Flex> */}
				<DemoComponent />
				<WorkshopControls />
			</Flex>
		</>
	)
}
