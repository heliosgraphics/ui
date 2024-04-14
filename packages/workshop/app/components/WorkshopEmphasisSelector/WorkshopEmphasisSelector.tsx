"use client"

import { useContext, type FC } from "react"
import { Flex, Select, EMPHASES } from "@heliosgraphics/ui"
import { WorkshopContext } from "../../contexts/WorkshopContext"
import type { WorkshopEmphasisSelectorProps } from "./WorkshopEmphasisSelector.types"

const WorkshopEmphasisSelector: FC<WorkshopEmphasisSelectorProps> = () => {
	const { emphasis, setEmphasis } = useContext(WorkshopContext)

	const items = EMPHASES.map((emphasis) => {
		return { name: emphasis, value: emphasis }
	})

	const onEmphasisChange = (event: any) => setEmphasis(event.target.value)

	return (
		<Flex gap={4}>
			<Select
				label="Emphasis Selector"
				isLabelHidden={true}
				isSmall={true}
				items={items}
				onChange={onEmphasisChange}
				selectedValue={emphasis}
			/>
		</Flex>
	)
}

export default WorkshopEmphasisSelector
