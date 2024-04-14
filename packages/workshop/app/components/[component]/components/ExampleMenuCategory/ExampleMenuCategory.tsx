"use client"

import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import { type FC } from "react"
import type { ExampleMenuCategoryProps } from "./ExampleMenuCategory.types"

const CODE_SAMPLE = `<div/>`

const ExampleMenuCategory: FC<ExampleMenuCategoryProps> = () => {
	return (
		<>
			<LiveComponent code={CODE_SAMPLE} />
		</>
	)
}

export default ExampleMenuCategory
