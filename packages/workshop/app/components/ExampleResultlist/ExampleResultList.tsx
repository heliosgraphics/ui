"use client"

import { ResultList, type ResultItem } from "@heliosgraphics/ui"
import type { FC } from "react"
import type { ExampleResultListProps } from "./ExampleResultList.types"

const resultListItems: Array<ResultItem> = [
	{ name: "First item", icon: "arrow-left" },
	{ name: "Second item", icon: "arrow-left" },
]

const ExampleResultList: FC<ExampleResultListProps> = () => {
	return <ResultList items={resultListItems} />
}

export default ExampleResultList
