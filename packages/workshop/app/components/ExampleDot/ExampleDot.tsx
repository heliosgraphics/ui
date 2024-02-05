"use client"

import { Flex, Dot } from "@heliosgraphics/ui"
import { useContext, type FC } from "react"
import { ColorContext } from "../../contexts/ColorContext"
import type { ExampleDotProps } from "./ExampleDot.types"

const ExampleDot: FC<ExampleDotProps> = () => {
	const { color } = useContext(ColorContext)

	return (
		<Flex gap={16} isWrapping={true}>
			<Dot size={128} color={color} />
		</Flex>
	)
}

export default ExampleDot
