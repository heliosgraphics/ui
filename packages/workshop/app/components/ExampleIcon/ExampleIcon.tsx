"use client"

import { Flex, Input, Select, Icon, Text, HeliosEmphasisType, EMPHASES } from "@heliosgraphics/ui"
import { meta } from "@heliosgraphics/icons/meta"
import { useState, type FC, type ChangeEvent } from "react"
import type { ExampleIconProps } from "./ExampleIcon.types"
import type { HeliosIconType } from "@heliosgraphics/icons/meta"

const ExampleIcon: FC<ExampleIconProps> = () => {
	const [icon, setIcon] = useState<HeliosIconType>("calendar")
	const [emphasis, setEmphasis] = useState<HeliosEmphasisType>("primary")
	const [filter, setFilter] = useState<string>("")
	const onFilter = (event: ChangeEvent<HTMLInputElement>) => setFilter(event.target.value)
	const filteredIcons: Array<HeliosIconType> = meta?.filter((icon) => icon.includes(filter))

	const items = EMPHASES.map((emphasis) => {
		return { name: emphasis, value: emphasis }
	})

	const onEmphasisChange = (event) => setEmphasis(event.target.value)

	return (
		<Flex isColumn={true} gap={16}>
			<Flex gap={8}>
				<Input label="Find an Icon" onChange={onFilter} value={filter} placeholder="Eg.: arrow" />
				<Select label="Select Emphasis" items={items} onChange={onEmphasisChange} selectedValue={emphasis} />
			</Flex>
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
							className={`${bg} radius-3 h-48 w-48`}
						>
							<div className="h-24 w-24">
								<Icon size={48} name={ic} emphasis={emphasis} />
							</div>
							<Text type="tiny" emphasis={emphasis}>
								{ic}
							</Text>
						</Flex>
					)
				})}
			</Flex>
		</Flex>
	)
}

export default ExampleIcon
