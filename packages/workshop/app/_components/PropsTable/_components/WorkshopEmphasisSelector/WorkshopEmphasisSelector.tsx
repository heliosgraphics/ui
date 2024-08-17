"use client"

import { useContext, type FC, type ChangeEvent } from "react"
import { Flex, Select, EMPHASES, HeliosEmphasisType } from "@heliosgraphics/ui"
import { WorkshopContext } from "workshop/app/_contexts/WorkshopContext"

export const WorkshopEmphasisSelector: FC = () => {
	const { emphasis, setEmphasis } = useContext(WorkshopContext)

	const items = EMPHASES.map((emphasis) => {
		return { name: emphasis, value: emphasis }
	})

	const onEmphasisChange = (event: ChangeEvent<HTMLSelectElement>) => setEmphasis(event.target.value as HeliosEmphasisType)

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
