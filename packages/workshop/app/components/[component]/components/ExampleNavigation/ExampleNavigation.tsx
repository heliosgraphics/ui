"use client"

import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import { type FC } from "react"
import type { ExampleNavigationProps } from "./ExampleNavigation.types"

const CODE_SAMPLE = `<div/>`

const ExampleNavigation: FC<ExampleNavigationProps> = () => {
	return (
		<>
			<LiveComponent code={CODE_SAMPLE} />
		</>
	)
}

export default ExampleNavigation
