"use client"

import { Flex, Input, Icon, Text } from "@heliosgraphics/ui"
import { meta } from "@heliosgraphics/icons/meta"
import { useState, type FC, type ChangeEvent } from "react"
import type { ExampleIconProps } from "./ExampleIcon.types"
import type { HeliosIconType } from "@heliosgraphics/icons/meta"

const ExampleIcon: FC<ExampleIconProps> = () => {
	const [icon, setIcon] = useState<HeliosIconType>("calendar")
	const [filter, setFilter] = useState<string>("")
	const onFilter = (event: ChangeEvent<HTMLInputElement>) =>
		setFilter(event.target.value)
	const filteredIcons: Array<HeliosIconType> = meta?.filter((icon) =>
		icon.includes(filter),
	)

	return (
		<>
			<Input
				label="Find an icon"
				onChange={onFilter}
				value={filter}
				placeholder="Eg.: arrow"
				type="text"
			/>
			<Flex isWrapping={true} gap={2}>
				{filteredIcons.map((ic, key) => {
					const onIconSet = () => setIcon(ic)
					const isActive: boolean = ic === icon
					const bg = isActive ? "bg-gray-800 gray-100" : "bg-gray-25 gray-800"

					return (
						<Flex
							key={key}
							gap={2}
							padding={4}
							isCentered={true}
							isColumn={true}
							onClick={onIconSet}
							className={`${bg} radius-3 h-48 w-48 cursor-pointer`}
						>
							<div className="h-24 w-24">
								<Icon size={48} name={ic} />
							</div>
							<Text type="tiny">{ic}</Text>
						</Flex>
					)
				})}
			</Flex>
		</>
	)
}

export default ExampleIcon
