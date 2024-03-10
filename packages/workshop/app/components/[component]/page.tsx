import { lazy } from "react"
import WorkshopControls from "../../components/WorkshopControls"
import { Flex, Breadcrumb, type BreadCrumbItem } from "@heliosgraphics/ui"
import Page from "../Page"

export default function Home({ params }) {
	const { component } = params
	if (!component) return null

	const DemoComponent = lazy(() => import(`./components/Example${component}`))
	if (!DemoComponent) return null

	return (
		<Flex isColumn={true} gap={0} withBackground={true} className="relative pb-48">
			<DemoComponent />
			<WorkshopControls />
		</Flex>
	)
}
