import { lazy } from "react"
import Page from "../Page"

export default function Home({ params }) {
	const { component } = params

	if (!component) return null

	const DemoComponent = lazy(() => import(`./components/Example${component}`))
	if (!DemoComponent) return null

	return (
		<Page disabledPadding={true}>
			<DemoComponent />
		</Page>
	)
}
