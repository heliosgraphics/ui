"use client"

import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import { type FC } from "react"
import type { ExampleSetupProps } from "./ExampleSetup.types"

const CODE_SAMPLE = `<div/>`

const ExampleSetup: FC<ExampleSetupProps> = () => {
	return (
		<>
			<LiveComponent code={CODE_SAMPLE} />
		</>
	)
}

export default ExampleSetup
