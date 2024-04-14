"use client"

import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import { type FC } from "react"
import type { ExampleThemeSwitcherLoadingProps } from "./ExampleThemeSwitcherLoading.types"

const CODE_SAMPLE = `<div/>`

const ExampleThemeSwitcherLoading: FC<ExampleThemeSwitcherLoadingProps> = () => {
	return (
		<>
			<LiveComponent code={CODE_SAMPLE} />
		</>
	)
}

export default ExampleThemeSwitcherLoading
