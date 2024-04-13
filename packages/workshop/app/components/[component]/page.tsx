import { Breadcrumb, type BreadCrumbItem, COMPONENTS } from "@heliosgraphics/ui"
import { lazy, type FC } from "react"
import Page from "../Page"
import PropsTable from "../../components/PropsTable"
import { getStatus } from "workshop/constants/components"

const Home: FC<any> = async ({ children, params }) => {
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

	return (
		<Page
			title={component}
			breadcrumb={<Breadcrumb items={BREADCRUMB_ITEMS} />}
			disabledPadding={true}
			labelColor={color}
			labelIcon={icon}
			labelText={name}
		>
			<DemoComponent />
			{children}
			<PropsTable meta={demoMeta} />
		</Page>
	)
}

export default Home
