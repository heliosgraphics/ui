"use client"

import type { FC } from "react"
import { Flex, Text } from "@heliosgraphics/ui"
import type { ExampleFlexProps } from "./ExampleFlex.types"

const ExampleFlex: FC<ExampleFlexProps> = () => {
	return (
		<Flex isColumn={true} gap={8}>
			<Text type="small">Hello</Text>
			<Text type="small">Word</Text>
		</Flex>
	)
}

export default ExampleFlex
