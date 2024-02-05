"use client"

import type { FC } from "react"
import { Flex, Loading } from "@heliosgraphics/ui"
import type { ExampleLoadingProps } from "./ExampleLoading.types"

const ExampleLoading: FC<ExampleLoadingProps> = () => {
	return (
		<Flex columns={2}>
			<Loading size={10} />
			<Loading size={20} />
			<Loading size={40} />
		</Flex>
	)
}

export default ExampleLoading
