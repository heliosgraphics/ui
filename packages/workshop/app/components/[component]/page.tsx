import { Breadcrumb, type BreadCrumbItem, COMPONENTS } from "@heliosgraphics/ui"
import { lazy, type FC } from "react"
import Page from "../Page"
import LiveComponent from "./components/LiveComponent"
import PropsTable from "../../components/PropsTable"
import { getStatus } from "workshop/constants/components"
import ExampleButton from "./components/ExampleButton"
import ExampleButtonGroup from "./components/ExampleButtonGroup"
import ExampleDonut from "./components/ExampleDonut"
import ExampleHeading from "./components/ExampleHeading"
import ExampleInput from "./components/ExampleInput"
import ExamplePill from "./components/ExamplePill"
import ExampleText from "./components/ExampleText"

const Home: FC<any> = async ({ params }) => {
	const { component } = params
	const DemoComponent = lazy(() => import(`./components/Example${component}`))
	const demoMeta = COMPONENTS[component]
	const { name, icon, color } = getStatus(component)

	if (!component) return null
	if (!DemoComponent || !demoMeta) return null

	const BREADCRUMB_ITEMS: Array<BreadCrumbItem> = [
		{ name: "Components", href: "/" },
		{ name: component, href: `/components/${component}`, isActive: true },
	]

	const getLiveComponent = () => {
		switch (component) {
			case "Button":
				return <ExampleButton />
			case "ButtonGroup":
				return <ExampleButtonGroup />
			case "Donut":
				return <ExampleDonut />
			case "Heading":
				return <ExampleHeading />
			case "Input":
				return <ExampleInput />
			case "Pill":
				return <ExamplePill />
			case "Text":
				return <ExampleText />

			default:
				return null
		}
	}

	return (
		<Page
			title={component}
			breadcrumb={<Breadcrumb items={BREADCRUMB_ITEMS} />}
			disabledPadding={true}
			labelColor={color}
			labelIcon={icon}
			labelText={name}
		>
			{getLiveComponent()}
			<LiveComponent code={demoMeta._patterns[0].content} />
			<PropsTable meta={demoMeta} />
		</Page>
	)
}

export default Home
