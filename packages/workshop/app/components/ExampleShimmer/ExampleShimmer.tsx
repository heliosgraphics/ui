"use client"

import { Flex, Shimmer } from "@heliosgraphics/ui"
import type { FC } from "react"
import type { ExampleShimmerProps } from "./ExampleShimmer.types"

const ExampleShimmer: FC<ExampleShimmerProps> = () => {
	return (
		<Flex isColumn={true} gap={8}>
			<Shimmer height={20} width={120} />
			<Shimmer height={20} width={120} />
		</Flex>
	)
}

export default ExampleShimmer
