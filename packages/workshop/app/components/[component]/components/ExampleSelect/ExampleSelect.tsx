"use client"

import { Flex, Select, Separator, type SelectItem } from "@heliosgraphics/ui"
import { useState, type FC } from "react"
import type { ExampleSelectProps } from "./ExampleSelect.types"
import LiveComponent from "../LiveComponent"

const CODE = `<Select
	label="Select Item"
	items={[{ name: "First Item", value: "first_item" }]}
	onChange={mockFn}/>`

const ExampleSelect: FC<ExampleSelectProps> = () => {
	const [selectedItem, setSelectedItem] = useState<string>("")
	const onSelectItem = (event: any) => setSelectedItem(event.target.value)

	const selectItems: Array<SelectItem> = [
		{ name: "First", value: "first" },
		{ name: "Second", value: "second" },
	]

	return (
		<>
			<LiveComponent code={CODE} />
			<Separator isLight={true} />
			<Flex gap={8} padding={16}>
				<Select
					label="Select Item"
					items={selectItems}
					onChange={onSelectItem}
					selectedValue={selectedItem}
					isLabelHidden={true}
				/>
				<Select
					label="Select Item"
					items={selectItems}
					onChange={onSelectItem}
					selectedValue={selectedItem}
					isLabelHidden={true}
					isSmall={true}
				/>
			</Flex>
		</>
	)
}

export default ExampleSelect
