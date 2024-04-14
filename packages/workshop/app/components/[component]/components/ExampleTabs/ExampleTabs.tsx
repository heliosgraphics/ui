"use client"

import type { FC } from "react"
import { Flex, Separator, Tabs } from "@heliosgraphics/ui"
import type { ExampleTabsProps } from "./ExampleTabs.types"
import LiveComponent from "../LiveComponent"

const ExampleTabs: FC<ExampleTabsProps> = () => {
	const tabItems = ["First", "Second", "Third"]

	const tabSections = [
		<Flex key={0} padding={8}>
			1. Content
		</Flex>,
		<Flex key={1} padding={8}>
			2. Content
		</Flex>,
		<Flex key={1} padding={8}>
			3. Content
		</Flex>,
	]

	return (
		<Flex padding={16}>
			<Tabs items={tabItems} sections={tabSections} />
		</Flex>
	)
}

export default ExampleTabs
