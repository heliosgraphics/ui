"use client"

import { meta } from "@heliosgraphics/ui/components/Confirm/Confirm.types"
import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import PropsTable from "workshop/app/components/PropsTable"
import { type FC } from "react"
import type { ExampleContentProps } from "./ExampleContent.types"

const CODE_SAMPLE = `<Content></Content>`

const ExampleContent: FC<ExampleContentProps> = () => {
	return (
		<>
			<LiveComponent code={CODE_SAMPLE} />
			<PropsTable meta={meta} />
		</>
	)
}

export default ExampleContent
