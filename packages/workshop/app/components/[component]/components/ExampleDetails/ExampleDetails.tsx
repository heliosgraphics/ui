"use client"

import { meta } from "@heliosgraphics/ui/components/Details/Details.types"
import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import PropsTable from "workshop/app/components/PropsTable"
import { type FC } from "react"
import type { ExampleDetailsProps } from "./ExampleDetails.types"

const CODE_SAMPLE = `<Details title="Details">Hello</Details>`

const ExampleDetails: FC<ExampleDetailsProps> = () => {
	return (
		<>
			<LiveComponent code={CODE_SAMPLE} />
			<PropsTable meta={meta} />
		</>
	)
}

export default ExampleDetails
