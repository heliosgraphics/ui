"use client"

import { useContext, type FC, type ChangeEvent } from "react"
import { Flex, Select, COLORS, ButtonGroup, Button, HeliosColors } from "@heliosgraphics/ui"
import { WorkshopContext } from "workshop/app/_contexts/WorkshopContext"

let lastColor: HeliosColors = "gray"

export const WorkshopColorSelector: FC = () => {
	const { color, setColor } = useContext(WorkshopContext)

	const items = COLORS.map((color) => {
		return { name: color, value: color }
	})

	const onColorChange = (event: ChangeEvent<HTMLSelectElement>) => setColor(event.target.value as HeliosColors)

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
				isSmall={true}
				items={items}
				onChange={onColorChange}
				selectedValue={color}
			/>
			<ButtonGroup>
				<Button intent="silent" value="Random" onClick={onRandom} size="small" />
			</ButtonGroup>
		</Flex>
	)
}
