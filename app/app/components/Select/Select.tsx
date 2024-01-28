"use client"

import { useState } from "react"
import { Select as SelectComponent } from "../../../../src"
import type { SelectProps } from "./Select.types"

const Select: React.FC<SelectProps> = () => {
	const [selectedItem, setSelectedItem] = useState<string>("")
	const onSelectItem = (e) => setSelectedItem(e.target.value)

	const selectItems = []

	return (
		<SelectComponent
			items={selectItems}
			onChange={onSelectItem}
			selectedValue={selectedItem}
		></SelectComponent>
	)
}

export default Select
