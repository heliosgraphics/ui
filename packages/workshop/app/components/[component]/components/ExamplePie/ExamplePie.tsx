"use client"

import { type PieItem } from "@heliosgraphics/ui"
import { type FC } from "react"
import type { ExamplePieProps } from "./ExamplePie.types"
import LiveComponent from "../LiveComponent"

const SAMPLE_CODE = `<Flex gap={8} isWrapping={true}>
	<Pie size={64} data={PIE_ITEMS} color="yellow" />
	<Pie size={64} data={PIE_ITEMS} color="green" />
	<Pie size={64} data={PIE_ITEMS} color="aqua" />
</Flex>`

const PIE_ITEMS: Array<PieItem> = [
	{ name: "X", value: 24 },
	{ name: "First", value: 24 },
	{ name: "Second", value: 34 },
	{ name: "Third", value: 63 },
]

const ExamplePie: FC<ExamplePieProps> = () => {
	return <LiveComponent code={SAMPLE_CODE} scope={{ PIE_ITEMS }} />
}

export default ExamplePie
