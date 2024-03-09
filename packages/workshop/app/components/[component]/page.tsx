import { Flex, Heading } from "@heliosgraphics/ui"
import WorkshopControls from "../../components/WorkshopControls"

import { lazy } from "react"

export default function Home({ params }) {
	const { component } = params
	if (!component) return null

	const DemoComponent = lazy(() => import(`./components/Example${component}`))
	if (!DemoComponent) return null

	return (
		<Flex isColumn={true} gap={12}>
			<Heading level={1}>{component}</Heading>
			<WorkshopControls />
			<DemoComponent />
		</Flex>
	)
}
