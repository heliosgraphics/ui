"use client"

import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import type { ExampleColumnProps } from "./ExampleColumn.types"
import type { FC } from "react"

const CODE_SAMPLE = `<Column width={480}>
<Text type="paragraph">Hello</Text>
</Column>`

const ExampleColumn: FC<ExampleColumnProps> = () => {
	return (
		<>
			<LiveComponent code={CODE_SAMPLE} />
		</>
	)
}

export default ExampleColumn
