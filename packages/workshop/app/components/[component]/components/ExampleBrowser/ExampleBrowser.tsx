"use client"

import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import type { ExampleBrowserProps } from "./ExampleBrowser.types"
import type { FC } from "react"

const CODE_SAMPLE = `<Browser width={480}>
	<Text type="paragraph">Hello</Text>
</Browser>`

const ExampleBrowser: FC<ExampleBrowserProps> = () => {
	return (
		<>
			<LiveComponent code={CODE_SAMPLE} />
		</>
	)
}

export default ExampleBrowser
