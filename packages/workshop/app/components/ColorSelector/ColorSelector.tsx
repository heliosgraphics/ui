import { useContext, type FC } from "react"
import { Flex, Select, COLORS, ButtonGroup, Button } from "@heliosgraphics/ui"
import { ColorContext } from "../../contexts/ColorContext"
import type { ColorSelectorProps } from "./ColorSelector.types"

let lastColor

const ColorSelector: FC<ColorSelectorProps> = () => {
	const { color, setColor } = useContext(ColorContext)

	const items = COLORS.map((color) => {
		return { name: color, value: color }
	})

	const onColorChange = (event) => setColor(event.target.value)
	const onPurple = () => setColor("purple")

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
				<Button intent="silent" value="Purple" onClick={onPurple} />
				<Button intent="silent" value="Random" onClick={onRandom} />
			</ButtonGroup>
		</Flex>
	)
}

export default ColorSelector