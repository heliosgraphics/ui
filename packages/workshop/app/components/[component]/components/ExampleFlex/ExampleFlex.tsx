"use client"

import type { FC } from "react"
import type { ExampleFlexProps } from "./ExampleFlex.types"
import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"

const CODE_SAMPLE = `<Flex gap={4} isColumn={true}>
<Text type="small">1</Text>
<Text>2</Text>
</Flex>`

const ExampleFlex: FC<ExampleFlexProps> = () => {
	return (
		<>
			<LiveComponent code={CODE_SAMPLE} />
		</>
	)
}

export default ExampleFlex
