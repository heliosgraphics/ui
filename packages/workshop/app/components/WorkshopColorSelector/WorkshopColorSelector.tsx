"use client"

import { useContext, type FC } from "react"
import { Flex, Select, COLORS, ButtonGroup, Button, HeliosColors } from "@heliosgraphics/ui"
import { WorkshopContext } from "../../contexts/WorkshopContext"
import type { WorkshopColorSelectorProps } from "./WorkshopColorSelector.types"

let lastColor: HeliosColors = "gray"

const WorkshopColorSelector: FC<WorkshopColorSelectorProps> = () => {
	const { color, setColor } = useContext(WorkshopContext)

	const items = COLORS.map((color) => {
		return { name: color, value: color }
	})

	const onColorChange = (event) => setColor(event.target.value)
	const onGray = () => setColor("gray")

	const onRandom = () => {
		let randomIntention

		do {
			randomIntention = COLORS[Math.floor(Math.random() * COLORS.length)]
		} while (lastColor === randomIntention)

		lastColor = randomIntention

		return setColor(randomIntention)
	}

	return (
		<Flex gap={4}>
			<Select
				label="Color Selector"
				isLabelHidden={true}
				items={items}
				onChange={onColorChange}
				selectedValue={color}
			/>
			<ButtonGroup align="join">
				<Button intent="silent" value="Random" onClick={onRandom} />
				<Button intent="silent" value="Gray" onClick={onGray} />
			</ButtonGroup>
		</Flex>
	)
}

export default WorkshopColorSelector
