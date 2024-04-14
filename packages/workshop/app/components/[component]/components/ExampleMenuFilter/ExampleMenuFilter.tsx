"use client"

import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import { type FC } from "react"
import type { ExampleMenuFilterProps } from "./ExampleMenuFilter.types"

const CODE_SAMPLE = `<div/>`

const ExampleMenuFilter: FC<ExampleMenuFilterProps> = () => {
	return (
		<>
			<LiveComponent code={CODE_SAMPLE} />
		</>
	)
}

export default ExampleMenuFilter
