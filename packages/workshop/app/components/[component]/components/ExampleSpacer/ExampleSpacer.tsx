"use client"

import { Flex, Text, Spacer } from "@heliosgraphics/ui"
import type { FC } from "react"
import type { ExampleSpacerProps } from "./ExampleSpacer.types"

const ExampleSpacer: FC<ExampleSpacerProps> = () => {
	return (
		<Flex isColumn={true}>
			<Text type="tiny" fontFamily="mono">
				there is a spacer
			</Text>
			<Spacer gap={24} />
			<Text type="tiny" fontFamily="mono">
				between us.
			</Text>
		</Flex>
	)
}

export default ExampleSpacer
