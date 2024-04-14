"use client"

import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import { type FC } from "react"
import type { ExampleMenuItemProps } from "./ExampleMenuItem.types"

const CODE_SAMPLE = `<div/>`

const ExampleMenuItem: FC<ExampleMenuItemProps> = () => {
	return (
		<>
			<LiveComponent code={CODE_SAMPLE} />
		</>
	)
}

export default ExampleMenuItem
