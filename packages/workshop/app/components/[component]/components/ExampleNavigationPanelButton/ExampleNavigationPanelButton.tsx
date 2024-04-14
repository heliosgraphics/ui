"use client"

import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import { type FC } from "react"
import type { ExampleNavigationPanelButtonProps } from "./ExampleNavigationPanelButton.types"

const CODE_SAMPLE = `<div/>`

const ExampleNavigationPanelButton: FC<ExampleNavigationPanelButtonProps> = () => {
	return (
		<>
			<LiveComponent code={CODE_SAMPLE} />
		</>
	)
}

export default ExampleNavigationPanelButton
