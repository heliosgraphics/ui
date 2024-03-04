"use client"

import type { FC } from "react"
import { Flex, Tabs } from "@heliosgraphics/ui"
import type { ExampleTabsProps } from "./ExampleTabs.types"

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

	return <Tabs items={tabItems} sections={tabSections} />
}

export default ExampleTabs
