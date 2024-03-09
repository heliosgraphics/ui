"use client"

import { type BreadCrumbItem } from "@heliosgraphics/ui"
import { Flex } from "@heliosgraphics/ui"
import { meta } from "@heliosgraphics/ui/components/Breadcrumb/Breadcrumb.types"
import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import PropsTable from "workshop/app/components/PropsTable"
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
		<Flex isColumn={true} gap={0} paddingY={24} withBackground={true}>
			<LiveComponent code={CODE_SAMPLE} scope={{ items: BREADCRUMB_ITEMS }} />
			<PropsTable meta={meta} />
		</Flex>
	)
}

export default ExampleBreadcrumb
