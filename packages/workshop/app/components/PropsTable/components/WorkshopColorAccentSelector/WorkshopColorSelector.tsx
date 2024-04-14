"use client"

import { useContext, type FC } from "react"
import { Flex, Select, COLORS, ButtonGroup, Button, HeliosColors } from "@heliosgraphics/ui"
import { WorkshopContext } from "workshop/app/contexts/WorkshopContext"
import type { WorkshopColorSelectorProps } from "./WorkshopColorSelector.types"

let lastColor: HeliosColors = "gray"

const WorkshopColorSelector: FC<WorkshopColorSelectorProps> = () => {
	const { colorAccent, setColorAccent } = useContext(WorkshopContext)

	const items = COLORS.map((color) => {
		return { name: color, value: color }
	})

	const onColorChange = (event: any) => setColorAccent(event.target.value)

	const onRandom = () => {
		let randomIntention

		do {
			randomIntention = COLORS[Math.floor(Math.random() * COLORS.length)]
		} while (lastColor === randomIntention)

		lastColor = randomIntention

		return setColorAccent(randomIntention)
	}

	return (
		<Flex gap={4}>
			<Select
				label="Color Selector"
				isLabelHidden={true}
				isSmall={true}
				items={items}
				onChange={onColorChange}
				selectedValue={colorAccent}
			/>
			<ButtonGroup>
				<Button intent="silent" value="Random" onClick={onRandom} size="small" />
			</ButtonGroup>
		</Flex>
	)
}

export default WorkshopColorSelector
