"use client"

import {
	Button,
	ButtonGroup,
	Dropdown,
	type ResultItem,
} from "@heliosgraphics/ui"
import { type FC } from "react"
import type { ExampleDropdownProps } from "./ExampleDropdown.types"

const resultListItems: Array<ResultItem> = [
	{ name: "First item", icon: "arrow-left" },
	{ name: "Second item", icon: "arrow-left" },
]

const ExampleDropdown: FC<ExampleDropdownProps> = () => {
	return (
		<Dropdown items={resultListItems}>
			<ButtonGroup>
				<Button value="Dropdown" intent="silent" />
			</ButtonGroup>
		</Dropdown>
	)
}

export default ExampleDropdown
