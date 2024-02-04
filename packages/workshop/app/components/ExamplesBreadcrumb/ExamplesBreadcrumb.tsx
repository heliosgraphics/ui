"use client"

import { useState, type FC } from "react"
import {
	Button,
	ButtonGroup,
	Separator,
	Flex,
	Text,
	Breadcrumb,
	type BreadCrumbItem,
	type HeliosIntentionType,
} from "@heliosgraphics/components"
import type { ExamplesBreadcrumbProps } from "./ExamplesBreadcrumb.types"

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

const ExamplesBreadcrumb: FC<ExamplesBreadcrumbProps> = () => {
	return (
		<Flex isColumn={true} gap={16}>
			<Breadcrumb items={breadCrumbItems} />
		</Flex>
	)
}

export default ExamplesBreadcrumb
