"use client"

import { Flex, Input, Select, type SelectItem } from "@heliosgraphics/ui"
import { useState, type FC } from "react"
import type { ExampleSelectProps } from "./ExampleSelect.types"

const ExampleSelect: FC<ExampleSelectProps> = () => {
	const [selectedItem, setSelectedItem] = useState<string>("")
	const onSelectItem = (e) => setSelectedItem(e.target.value)

	const selectItems: Array<SelectItem> = [
		{ name: "First", value: "first" },
		{ name: "Second", value: "second" },
	]

	return (
		<Flex isColumn={true} gap={12}>
			<Select label="Select Item" items={selectItems} onChange={onSelectItem} selectedValue={selectedItem} />
			<Select
				label="Select Item"
				items={selectItems}
				onChange={onSelectItem}
				selectedValue={selectedItem}
				isLabelHidden={true}
			/>
		</Flex>
	)
}

export default ExampleSelect
