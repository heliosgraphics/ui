"use client"

import { meta } from "@heliosgraphics/ui/components/Column/Column.types"
import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import PropsTable from "workshop/app/components/PropsTable"
import type { ExampleColumnProps } from "./ExampleColumn.types"
import type { FC } from "react"

const CODE_SAMPLE = `<Column width={480}>
<Text type="paragraph">Hello</Text>
</Column>`

const ExampleColumn: FC<ExampleColumnProps> = () => {
	return (
		<>
			<LiveComponent code={CODE_SAMPLE} />
			<PropsTable meta={meta} />
		</>
	)
}

export default ExampleColumn
