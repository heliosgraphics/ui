"use client"

import { Flex, Dropdown, Button, ButtonGroup, type ResultItem } from "@heliosgraphics/ui"
import type { FC } from "react"
import type { ExampleResultListProps } from "./ExampleResultList.types"

const RESULT_LIST_ITEMS: Array<ResultItem> = [
	{ name: "First Item", icon: "bullseye" },
	{
		name: "Second Item",
		icon: "bell",
		description: "Nulla ultricies ultrices mauris, sed posuere justo ultrices in.",
	},
	{ name: "Separator", type: "separator" },
	{ name: "Disabled", isDisabled: true },
	{ name: "Random Item", icon: "person" },
	{ name: "Active Item", icon: "bell", isActive: true },
	{ name: "Lorem Ipsum Dolor Sit Ameta", icon: "x-x" },
]

const ExampleResultList: FC<ExampleResultListProps> = () => {
	return (
		<Flex>
			<ButtonGroup>
				<Dropdown items={RESULT_LIST_ITEMS} position="left">
					<Button value="Items" intent="silent" size="small" icon="chevron-down" />
				</Dropdown>
			</ButtonGroup>
		</Flex>
	)
}

export default ExampleResultList
