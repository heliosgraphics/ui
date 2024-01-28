"use client"

import React, { useState } from "react"
import {
	Button,
	ButtonGroup,
	Separator,
	Flex,
	Text,
	Breadcrumb,
	type BreadCrumbItem,
	type HeliosIntentionType,
} from "../../../../src"
import type { ExamplesBreadcrumbProps } from "./ExamplesBreadcrumb.types"

const breadCrumbItems: Array<BreadCrumbItem> = [
	{ name: "Index", href: "/" },
	{ name: "Books", href: "/consequat" },
	{
		name: "Maecenas pellentesque",
		href: "/consequat/maecenas-pellentesque",
		isActive: true,
	},
]

const ExamplesBreadcrumb: React.FC<ExamplesBreadcrumbProps> = () => {
	return (
		<Flex isColumn={true} gap={16}>
			<Breadcrumb items={breadCrumbItems} />
		</Flex>
	)
}

export default ExamplesBreadcrumb
