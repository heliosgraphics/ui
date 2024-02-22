"use client"

import { Flex, Breadcrumb, type BreadCrumbItem } from "@heliosgraphics/ui"
import { type FC } from "react"
import type { ExampleBreadcrumbProps } from "./ExampleBreadcrumb.types"

const breadCrumbItems: Array<BreadCrumbItem> = [
	{ name: "Index", href: "/", onClick: () => void 0 },
	{ name: "Books", href: "/consequat", onClick: () => void 0 },
	{
		name: "Maecenas pellentesque",
		href: "/consequat/maecenas-pellentesque",
		isActive: true,
		onClick: () => void 0,
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
