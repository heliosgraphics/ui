"use client"

import {
	Button,
	ButtonGroup,
	Dropdown,
	Flex,
	type ResultItem,
} from "@heliosgraphics/ui"
import { useState, type FC } from "react"
import type { ExampleDropdownProps } from "./ExampleDropdown.types"

const ExampleDropdown: FC<ExampleDropdownProps> = () => {
	const [hasSpecials, setSpecials] = useState<boolean>(false)

	const onToggleSpecials = () => setSpecials(!hasSpecials)

	const resultListItems: Array<ResultItem> = [
		{ name: "First Item", icon: "bullseye" },
		{
			name: "Second Item",
			icon: "bell",
			description:
				"Nulla ultricies ultrices mauris, sed posuere justo ultrices in.",
		},
		{ name: "Separator", type: "separator" },
		{ name: "Disabled", isDisabled: hasSpecials },
		{ name: "Random Item", icon: "person" },
		{ name: "Active Item", icon: "bell", isActive: hasSpecials },
		{ name: "Lorem Ipsum Dolor Sit Ameta", icon: "x-x" },
	]

	return (
		<Flex gap={16} isBetween={true}>
			<ButtonGroup>
				<Dropdown items={resultListItems} position="left">
					<Button value="Left" intent="silent" icon="chevron-down" />
				</Dropdown>
				<Button
					value="Specials"
					intent="silent"
					icon="bullseye"
					onClick={onToggleSpecials}
				/>
			</ButtonGroup>
			<Dropdown items={resultListItems} position="right">
				<ButtonGroup>
					<Button value="Right" intent="silent" icon="chevron-down" />
				</ButtonGroup>
			</Dropdown>
		</Flex>
	)
}

export default ExampleDropdown
