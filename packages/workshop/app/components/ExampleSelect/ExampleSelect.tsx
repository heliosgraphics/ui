"use client"

import { Select } from "@heliosgraphics/ui"
import { useState, type FC } from "react"
import type { ExampleSelectProps } from "./ExampleSelect.types"

const ExampleSelect: FC<ExampleSelectProps> = () => {
	const [selectedItem, setSelectedItem] = useState<string>("")
	const onSelectItem = (e) => setSelectedItem(e.target.value)

	const selectItems = []

	return <Select items={selectItems} onChange={onSelectItem} selectedValue={selectedItem} />
}

export default ExampleSelect
