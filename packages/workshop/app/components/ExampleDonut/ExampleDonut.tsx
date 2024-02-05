"use client"

import { Flex, Donut } from "@heliosgraphics/ui"
import { useContext, type FC } from "react"
import type { ExampleDonutProps } from "./ExampleDonut.types"
import { ColorContext } from "../../contexts/ColorContext"

const ExampleDonut: FC<ExampleDonutProps> = () => {
	const { color } = useContext(ColorContext)

	return (
		<Flex gap={16} isWrapping={true}>
			<Donut size={32} percentage={56} color={color} />
			<Donut size={48} percentage={60} color={color} />
			<Donut size={64} percentage={90} color={color} />
			<Donut size={96} percentage={23} color={color} />
			<Donut size={128} percentage={49} color={color} />
		</Flex>
	)
}

export default ExampleDonut
