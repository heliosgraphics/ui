import { useContext, type FC } from "react"
import { Flex, Select, COLORS, ButtonGroup, Button, HeliosColors } from "@heliosgraphics/ui"
import { WorkshopContext } from "../../../../contexts/WorkshopContext"
import type { ColorSelectorProps } from "./ColorSelector.types"

let lastColor: HeliosColors = "gray"

const ColorSelector: FC<ColorSelectorProps> = () => {
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
			<Select items={items} onChange={onColorChange} selectedValue={color} />
			<ButtonGroup>
				<Button intent="silent" value="Gray" onClick={onGray} />
				<Button intent="silent" value="Random" onClick={onRandom} />
			</ButtonGroup>
		</Flex>
	)
}

export default ColorSelector
