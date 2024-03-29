"use client"

import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import type { BreadCrumbItem } from "@heliosgraphics/ui"
import type { ExampleBreadcrumbProps } from "./ExampleBreadcrumb.types"
import type { FC } from "react"

const BREADCRUMB_ITEMS: Array<BreadCrumbItem> = [
	{ name: "Index", href: "/", onClick: () => null },
	{ name: "Books", href: "/", onClick: () => null },
	{
		name: "Lorem Ipsum",
		href: "/",
		isActive: true,
		onClick: () => null,
	},
]

const CODE_SAMPLE = `<Breadcrumb items={items} />`

const ExampleBreadcrumb: FC<ExampleBreadcrumbProps> = () => {
	return (
		<>
			<LiveComponent code={CODE_SAMPLE} scope={{ items: BREADCRUMB_ITEMS }} />
		</>
	)
}

export default ExampleBreadcrumb
