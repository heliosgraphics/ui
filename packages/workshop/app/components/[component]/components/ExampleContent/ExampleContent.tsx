"use client"

import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import { type FC } from "react"
import type { ExampleContentProps } from "./ExampleContent.types"

const CODE_SAMPLE = `<Content></Content>`

const ExampleContent: FC<ExampleContentProps> = () => {
	return (
		<>
			<LiveComponent code={CODE_SAMPLE} />
		</>
	)
}

export default ExampleContent
