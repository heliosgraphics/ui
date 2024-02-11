"use client"

import { Flex, Pie, type PieItem } from "@heliosgraphics/ui"
import { type FC } from "react"
import type { ExamplePieProps } from "./ExamplePie.types"
// import { WorkshopContext } from "../../contexts/WorkshopContext"

const pieItems: Array<PieItem> = [
	{ name: "X", value: 24 },
	{ name: "First", value: 24 },
	{ name: "Second", value: 34 },
	{ name: "Third", value: 63 },
]

const ExamplePie: FC<ExamplePieProps> = () => {
	// const { color } = useContext(WorkshopContext)

	return (
		<Flex gap={8} isWrapping={true}>
			<Pie size={64} data={pieItems} color="yellow" />
			<Pie size={64} data={pieItems} color="green" />
			<Pie size={64} data={pieItems} color="aqua" />
			{/* <Pie size={128} data={pieItems} color={color} /> */}
		</Flex>
	)
}

export default ExamplePie
