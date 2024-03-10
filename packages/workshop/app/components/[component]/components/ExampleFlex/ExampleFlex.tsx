"use client"

import type { FC } from "react"
import { meta } from "@heliosgraphics/ui/components/Flex/Flex.types"
import type { ExampleFlexProps } from "./ExampleFlex.types"
import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import PropsTable from "workshop/app/components/PropsTable"

const CODE_SAMPLE = `<Flex gap={4} isColumn={true}>
<Text type="small">1</Text>
<Text>2</Text>
</Flex>`

const ExampleFlex: FC<ExampleFlexProps> = () => {
	return (
		<>
			<LiveComponent code={CODE_SAMPLE} />
			<PropsTable meta={meta} />
		</>
	)
}

export default ExampleFlex
