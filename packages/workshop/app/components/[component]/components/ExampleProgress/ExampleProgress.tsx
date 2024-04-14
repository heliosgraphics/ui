"use client"

import type { FC } from "react"
import type { ExampleProgressProps } from "./ExampleProgress.types"
import LiveComponent from "../LiveComponent"

const SAMPLE_CODE = `<Flex isColumn={true} gap={8}>
	<Progress max={100} value={12} />
	<Progress max={100} value={68} />
	<Progress max={100} value={92} />
</Flex>`

const ExampleProgress: FC<ExampleProgressProps> = () => {
	return <LiveComponent code={SAMPLE_CODE} />
}

export default ExampleProgress
