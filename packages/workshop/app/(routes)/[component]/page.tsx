import { Breadcrumb, type BreadCrumbItem, COMPONENTS } from "@heliosgraphics/ui"
import { ExampleButton } from "./_components/ExampleButton"
import { ExampleButtonGroup } from "./_components/ExampleButtonGroup"
import { ExampleDonut } from "./_components/ExampleDonut"
import { ExampleHeading } from "./_components/ExampleHeading"
import { ExampleInput } from "./_components/ExampleInput"
import { ExamplePill } from "./_components/ExamplePill"
import { ExampleText } from "./_components/ExampleText"
import { getStatus } from "@heliosgraphics/ui/constants/meta"
import { lazy } from "react"
import { LiveComponent } from "./_components/LiveComponent"
import { Page } from "workshop/app/_components/Page"
import { PropsTable } from "workshop/app/_components/PropsTable"
import type { NextPage } from "next"

const ComponentsPage: NextPage<{ params: { component: string } }> = async ({ params }) => {
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

export default ComponentsPage
