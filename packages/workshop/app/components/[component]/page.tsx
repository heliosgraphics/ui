import { Flex, Heading } from "@heliosgraphics/ui"
import LiveComponent from "./components/LiveComponent"
import WorkshopControls from "../../components/WorkshopControls"
import { lazy } from "react"
import Page from "../Page"

export default function Home({ params }) {
	const { component } = params
	if (!component) return null

	const DemoComponent = lazy(() => import(`./components/Example${component}`))
	if (!DemoComponent) return null

	return (
		<>
			<Page>
				<Flex isColumn={true} gap={12}>
					<Heading level={1}>{component}</Heading>
					<WorkshopControls />
					<DemoComponent />
				</Flex>
			</Page>
			<Page noPadding={true}>
				<LiveComponent code='<Button intent="advise" value="Hello" icon="x-github"/>' />
			</Page>
		</>
	)
}
