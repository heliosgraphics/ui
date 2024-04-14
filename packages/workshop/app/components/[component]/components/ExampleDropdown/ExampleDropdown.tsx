"use client"

import { Checkbox, Flex, Separator, type ResultItem } from "@heliosgraphics/ui"
import { useState, type FC } from "react"
import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import type { ExampleDropdownProps } from "./ExampleDropdown.types"

const CODE_SAMPLE = `<ButtonGroup align={position}>
	<Dropdown items={resultListItems} position={position}>
		<Button value={position} intent="silent" icon="chevron-down" size="small" />
	</Dropdown>
</ButtonGroup>`

const ExampleDropdown: FC<ExampleDropdownProps> = () => {
	const [hasSpecials, setSpecials] = useState<boolean>(false)
	const [position, setPosition] = useState<"left" | "right">("left")

	const onToggleSpecials = () => setSpecials(!hasSpecials)
	const onTogglePosition = () => setPosition(position === "left" ? "right" : "left")

	const resultListItems: Array<ResultItem> = [
		{ name: "First Item", icon: "bullseye" },
		{
			name: "Second Item",
			icon: "bell",
			description: "Nulla ultricies ultrices mauris, sed posuere justo ultrices in.",
		},
		{ name: "Separator", type: "separator" },
		{ name: "Disabled", isDisabled: hasSpecials },
		{ name: "Random Item", icon: "person" },
		{ name: "Active Item", icon: "bell", isActive: hasSpecials },
		{ name: "Lorem Ipsum Dolor Sit Ameta", icon: "x-x" },
	]

	return (
		<>
			<LiveComponent code={CODE_SAMPLE} scope={{ resultListItems, position }} />
			<Separator isLight={true} />
			<Flex gap={4} isColumn={true} padding={16}>
				<Checkbox
					label="Has Special Items"
					isSmall={true}
					intent="silent"
					onChange={onToggleSpecials}
					isChecked={hasSpecials}
				/>
				<Checkbox
					label="Left Aligned"
					isSmall={true}
					intent="silent"
					onChange={onTogglePosition}
					isChecked={position === "left"}
				/>
			</Flex>
		</>
	)
}

export default ExampleDropdown
