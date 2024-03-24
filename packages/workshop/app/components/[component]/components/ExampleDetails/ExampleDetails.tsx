"use client"

import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import type { FC } from "react"
import type { ExampleDetailsProps } from "./ExampleDetails.types"

const CODE_SAMPLE = `<Details title="Details">
	<Flex>Block</Flex>
</Details>`

const ExampleDetails: FC<ExampleDetailsProps> = () => {
	return (
		<>
			<LiveComponent code={CODE_SAMPLE} />
		</>
	)
}

export default ExampleDetails
