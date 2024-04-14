"use client"

import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import { type FC } from "react"
import type { ExampleMenuProps } from "./ExampleMenu.types"

const CODE_SAMPLE = `<div/>`

const ExampleMenu: FC<ExampleMenuProps> = () => {
	return (
		<>
			<LiveComponent code={CODE_SAMPLE} />
		</>
	)
}

export default ExampleMenu
