"use client"

import React, { useState } from "react"
import { Details, Flex, Input, Icon, Text } from "../../../../src"
import { meta } from "@heliosgraphics/icons/meta"
import type { HeliosIconType } from "@heliosgraphics/icons/meta"

const ComponentPage: React.FC<{}> = () => {
	const [icon, setIcon] = useState<HeliosIconType>("calendar")
	const [filter, setFilter] = useState<string>("")
	const onFilter = (event: React.ChangeEvent<HTMLInputElement>) =>
		setFilter(event.target.value)
	const filteredIcons: Array<HeliosIconType> = meta?.filter((icon) =>
		icon.includes(filter),
	)

	return (
		<>
			<Text type="paragraph">
				Our handcrafted icon library designed for a human-centric, future-ready
				experience. A work in progress.
			</Text>
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

export default ComponentPage
