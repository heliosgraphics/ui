"use client"

import {
	Alert,
	Flex,
	Input,
	Select,
	Icon,
	Text,
	HeliosEmphasisType,
	EMPHASES,
	ICONS,
	type HeliosIconType,
} from "@heliosgraphics/ui"
import { useState, type FC, type ChangeEvent } from "react"
import type { ExampleIconProps } from "./ExampleIcon.types"

const ExampleIcon: FC<ExampleIconProps> = () => {
	const [icon, setIcon] = useState<HeliosIconType>("calendar")
	const [emphasis, setEmphasis] = useState<HeliosEmphasisType>("primary")
	const [filter, setFilter] = useState<string>("")
	const onFilter = (event: ChangeEvent<HTMLInputElement>) => setFilter(event.target.value)
	const filteredIcons: Array<HeliosIconType> = ICONS?.filter((icon) => icon.includes(filter))

	const items = EMPHASES.map((emphasis) => {
		return { name: emphasis, value: emphasis }
	})

	const onEmphasisChange = (event) => setEmphasis(event.target.value)

	return (
		<Flex isColumn={true} gap={16}>
			<Alert intent="silent" icon="info">
				In progress.
			</Alert>
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
							className={`${bg} radius-3 h-40 w-40`}
						>
							<Icon size={32} name={ic} emphasis={emphasis} />
							<Text type="tiny" fontFamily="mono" emphasis={emphasis}>
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
