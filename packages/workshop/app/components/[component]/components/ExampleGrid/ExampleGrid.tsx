"use client"

import type { FC } from "react"
import { Grid, Text } from "@heliosgraphics/ui"
import type { ExampleGridProps } from "./ExampleGrid.types"

const ExampleGrid: FC<ExampleGridProps> = () => {
	return (
		<Grid columns={2}>
			<Text type="small">01</Text>
			<Text type="small">02</Text>
			<Text type="small">03</Text>
			<Text type="small">04</Text>
		</Grid>
	)
}

export default ExampleGrid
