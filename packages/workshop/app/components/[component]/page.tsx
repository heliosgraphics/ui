import { lazy } from "react"
import WorkshopControls from "../../components/WorkshopControls"
import { Flex } from "@heliosgraphics/ui"
import Page from "../Page"

export default function Home({ params }) {
	const { component } = params
	if (!component) return null

	const DemoComponent = lazy(() => import(`./components/Example${component}`))
	if (!DemoComponent) return null

	return (
		<>
			<Page title={component}>
				<WorkshopControls />
			</Page>
			<Flex isColumn={true} gap={0} paddingY={24} withBackground={true} className="relative">
				<DemoComponent />
			</Flex>
		</>
	)
}
