"use client"

import { Flex, Progress } from "@heliosgraphics/ui"
import type { FC } from "react"
import type { ExampleProgressProps } from "./ExampleProgress.types"

const ExampleProgress: FC<ExampleProgressProps> = () => {
	return (
		<Flex isColumn={true} gap={8}>
			<Progress max={100} value={12} />
			<Progress max={100} value={68} />
			<Progress max={100} value={92} />
		</Flex>
	)
}

export default ExampleProgress
