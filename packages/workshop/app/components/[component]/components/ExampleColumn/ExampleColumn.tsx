"use client"

import { Column, Text } from "@heliosgraphics/ui"
import { type FC } from "react"
import type { ExampleColumnProps } from "./ExampleColumn.types"

const ExampleColumn: FC<ExampleColumnProps> = () => {
	return (
		<div>
			<Column width={480}>
				<Text type="paragraph">Hello</Text>
			</Column>
		</div>
	)
}

export default ExampleColumn
