"use client"

import { Pie, type PieItem } from "@heliosgraphics/ui"
import type { FC } from "react"
import type { ExamplePieProps } from "./ExamplePie.types"

const pieItems: Array<PieItem> = []

const ExamplePie: FC<ExamplePieProps> = () => {
	return <Pie size={20} data={pieItems} />
}

export default ExamplePie
