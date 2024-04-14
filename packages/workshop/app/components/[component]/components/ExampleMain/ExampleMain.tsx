"use client"

import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import { type FC } from "react"
import type { ExampleMainProps } from "./ExampleMain.types"

const CODE = `<div/>`

const ExampleMain: FC<ExampleMainProps> = () => {
	return (
		<>
			<LiveComponent code={CODE} />
		</>
	)
}

export default ExampleMain
