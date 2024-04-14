"use client"

import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import type { ExampleTooltipProps } from "./ExampleTooltip.types"
import type { FC } from "react"

const CODE_SAMPLE = `<Tooltip position='left'>
	<Text type="paragraph">Hello</Text>
</Tooltip>`

const ExampleTooltip: FC<ExampleTooltipProps> = () => {
	return (
		<>
			<LiveComponent code={CODE_SAMPLE} />
		</>
	)
}

export default ExampleTooltip
