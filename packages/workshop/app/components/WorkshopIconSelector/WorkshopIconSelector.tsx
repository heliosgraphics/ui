"use client"

import { useContext, type FC } from "react"
import { Flex, Select, ICONS } from "@heliosgraphics/ui"
import { WorkshopContext } from "../../contexts/WorkshopContext"
import type { WorkshopIconSelectorProps } from "./WorkshopIconSelector.types"

const WorkshopIconSelector: FC<WorkshopIconSelectorProps> = () => {
	const { icon, setIcon } = useContext(WorkshopContext)

	const icons = ICONS.map((icon) => ({ name: icon, value: icon }))
	const onIconChange = (event) => setIcon(event.target.value)

	return (
		<Flex gap={4}>
			<Select label="Icon Selector" isLabelHidden={true} items={icons} onChange={onIconChange} selectedValue={icon} />
		</Flex>
	)
}

export default WorkshopIconSelector
