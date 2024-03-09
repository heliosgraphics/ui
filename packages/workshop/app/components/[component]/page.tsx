import { Flex, Heading } from "@heliosgraphics/ui"
import LiveComponent from "./components/LiveComponent"
import WorkshopControls from "../../components/WorkshopControls"
import { lazy } from "react"
import Page from "../Page"

const CODE_SAMPLES: Record<any, string> = {
	Alert: `<Alert title="Vitae, assumenda aliquid" intent={intent} icon="info" onClose={onClose}>
  {INTENT_DESCRIPTIONS[intent]}
</Alert>`,
}

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
				<LiveComponent code={CODE_SAMPLES[component] || ""} />
			</Page>
		</>
	)
}
