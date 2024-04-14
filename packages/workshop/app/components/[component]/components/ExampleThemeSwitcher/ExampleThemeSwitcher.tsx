"use client"

import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import { type FC } from "react"
import type { ExampleThemeSwitcherProps } from "./ExampleThemeSwitcher.types"

const CODE_SAMPLE = `<div/>`

const ExampleThemeSwitcher: FC<ExampleThemeSwitcherProps> = () => {
	return (
		<>
			<LiveComponent code={CODE_SAMPLE} />
		</>
	)
}

export default ExampleThemeSwitcher
