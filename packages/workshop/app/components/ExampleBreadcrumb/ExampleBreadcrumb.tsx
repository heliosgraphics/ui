"use client"

import { Flex, Breadcrumb, type BreadCrumbItem } from "@heliosgraphics/ui"
import { type FC } from "react"
import type { ExampleBreadcrumbProps } from "./ExampleBreadcrumb.types"

const breadCrumbItems: Array<BreadCrumbItem> = [
	{ name: "Index", href: "/", onClick: () => null },
	{ name: "Books", href: "/consequat", onClick: () => null },
	{
		name: "Maecenas pellentesque",
		href: "/consequat/maecenas-pellentesque",
		isActive: true,
		onClick: () => null,
	},
]

const ExampleBreadcrumb: FC<ExampleBreadcrumbProps> = () => {
	return (
		<Flex isColumn={true} gap={16}>
			<Breadcrumb items={breadCrumbItems} />
		</Flex>
	)
}

export default ExampleBreadcrumb
