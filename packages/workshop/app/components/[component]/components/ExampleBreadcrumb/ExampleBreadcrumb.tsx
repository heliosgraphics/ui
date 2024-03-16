"use client"

import { meta } from "@heliosgraphics/ui/components/Breadcrumb/Breadcrumb.types"
import { type BreadCrumbItem } from "@heliosgraphics/ui"
import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import PropsTable from "workshop/app/components/PropsTable"
import type { ExampleBreadcrumbProps } from "./ExampleBreadcrumb.types"
import type { FC } from "react"

const BREADCRUMB_ITEMS: Array<BreadCrumbItem> = [
	{ name: "Index", href: "/", onClick: () => null as any },
	{ name: "Books", href: "/", onClick: () => null as any },
	{
		name: "Lorem Ipsum",
		href: "/",
		isActive: true,
		onClick: () => null as any,
	},
]

const CODE_SAMPLE = `<Breadcrumb items={items} />`

const ExampleBreadcrumb: FC<ExampleBreadcrumbProps> = () => {
	return (
		<>
			<LiveComponent code={CODE_SAMPLE} scope={{ items: BREADCRUMB_ITEMS }} />
			<PropsTable meta={meta} />
		</>
	)
}

export default ExampleBreadcrumb
