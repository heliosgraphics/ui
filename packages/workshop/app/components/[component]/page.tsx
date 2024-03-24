import { Breadcrumb, HeliosAttributeMeta, type BreadCrumbItem } from "@heliosgraphics/ui"
import Page from "../Page"
import { lazy } from "react"
import PropsTable from "../../components/PropsTable"

const loadMeta = async (component: string = ""): Promise<HeliosAttributeMeta<unknown>> => {
	if (!component) return Promise.reject()

	const { meta } = await import(`@heliosgraphics/ui/components/${component}/${component}.types`)

	return meta
}

export default async function Home({ children, params }) {
	const { component } = params
	const DemoComponent = lazy(() => import(`./components/Example${component}`))
	const demoMeta = await loadMeta(component).then((meta) => meta)

	if (!component) return null
	if (!DemoComponent || !demoMeta) return null

	const BREADCRUMB_ITEMS: Array<BreadCrumbItem> = [
		{ name: "Components", href: "/" },
		{ name: component, href: `/components/${component}`, isActive: true },
	]

	return (
		<Page title={component} breadcrumb={<Breadcrumb items={BREADCRUMB_ITEMS} />} disabledPadding={true}>
			<DemoComponent />

			{children}
			<PropsTable meta={demoMeta} />
		</Page>
	)
}
