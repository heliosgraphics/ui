"use client"

import {
	Alert,
	Flex,
	Input,
	Tile,
	ICONS,
	// Select,
	// Icon,
	// Text,
	// HeliosEmphasisType,
	// EMPHASES,
	type HeliosIconType,
} from "@heliosgraphics/ui"
import { useState, useContext, type FC, type ChangeEvent } from "react"
import { WorkshopContext } from "../../contexts/WorkshopContext"
import type { ExampleIconProps } from "./ExampleIcon.types"

const ExampleIcon: FC<ExampleIconProps> = () => {
	const { icon, setIcon } = useContext(WorkshopContext)
	// const [emphasis, setEmphasis] = useState<HeliosEmphasisType>("primary")
	const [filter, setFilter] = useState<string>("")
	const onFilter = (event: ChangeEvent<HTMLInputElement>) => setFilter(event.target.value)
	const filteredIcons: Array<HeliosIconType> = ICONS?.filter((icon) => icon.includes(filter))

	// const items = EMPHASES.map((emphasis) => {
	// 	return { name: emphasis, value: emphasis }
	// })

	// const onEmphasisChange = (event) => setEmphasis(event.target.value)

	return (
		<Flex isColumn={true} gap={16}>
			<Alert intent="silent" icon="info">
				In progress.
			</Alert>
			<Flex gap={8}>
				<Input label="Find an Icon" onChange={onFilter} value={filter} placeholder="Eg.: arrow" />
				{/* <Select label="Select Emphasis" items={items} onChange={onEmphasisChange} selectedValue={emphasis} /> */}
			</Flex>
			<Flex isWrapping={true} gap={2}>
				{filteredIcons.map((ic, key) => {
					const onIconSet = () => setIcon(ic)
					const isActive: boolean = ic === icon

					return (
						<Tile
							key={key}
							onClick={onIconSet}
							color="gray"
							text={ic}
							icon={ic}
							size={64}
							isRounded={true}
							colorAccent={isActive ? "orange" : undefined}
						/>
					)
				})}
			</Flex>
		</Flex>
	)
}

export default ExampleIcon
