"use client"

import {
	Button,
	ButtonGroup,
	Select,
	Flex,
	Tile,
	COLORS,
	ICONS,
	type HeliosColors,
	type HeliosIconType,
} from "@heliosgraphics/ui"
import { WorkshopContext } from "../../contexts/WorkshopContext"
import { useContext, useState, type FC } from "react"
import type { ExampleTileProps } from "./ExampleTile.types"

const ExampleTile: FC<ExampleTileProps> = () => {
	const [isRounded, setRounded] = useState<boolean>(false)
	const [isRound, setRound] = useState<boolean>(true)
	const [text, setText] = useState<string | undefined>(undefined)
	const [colorAccent, setColorAccent] = useState<HeliosColors>("orange")
	const [iconAccent, setIconAccent] = useState<HeliosIconType>("flame")

	const { color, icon } = useContext(WorkshopContext)

	const items = COLORS.map((color) => ({ name: color, value: color }))
	const icons = ICONS.map((icon) => ({ name: icon, value: icon }))

	const onColorChange = (event) => setColorAccent(event.target.value)
	const onIconAccentChange = (event) => setIconAccent(event.target.value)

	const onToggleRound = () => setRound(!isRound)
	const onToggleRounded = () => setRounded(!isRounded)
	const onToggleText = () => setText(text ? undefined : "Morning Glory")

	return (
		<Flex gap={12} isColumn={true}>
			<ButtonGroup>
				<Button value="Round" intent="silent" size="small" onClick={onToggleRound} />
				<Button value="Rounded" intent="silent" size="small" onClick={onToggleRounded} />
				<Button value="Text" intent="silent" size="small" onClick={onToggleText} />
				<Select
					label="Color Accent"
					isLabelHidden={true}
					items={items}
					onChange={onColorChange}
					selectedValue={colorAccent}
				/>
				<Select
					label="Icon Accent"
					isLabelHidden={true}
					items={icons}
					onChange={onIconAccentChange}
					selectedValue={iconAccent}
				/>
			</ButtonGroup>
			<Flex gap={4} isWrapping={true}>
				<Tile color={color} icon={icon} iconAccent={iconAccent} size={40} isRound={isRound} isRounded={isRounded} />
				<Tile
					color={color}
					icon={icon}
					iconAccent={iconAccent}
					size={40}
					isRound={isRound}
					isRounded={isRounded}
					colorAccent={colorAccent}
				/>
				<Tile
					color={color}
					icon={icon}
					iconAccent={iconAccent}
					size={64}
					isRound={isRound}
					isRounded={isRounded}
					text={text ? "Morning" : ""}
				/>
				<Tile
					color={color}
					icon={icon}
					iconAccent={iconAccent}
					size={64}
					isRound={isRound}
					isRounded={isRounded}
					text={text ? "Morning" : ""}
					colorAccent={colorAccent}
				/>
				<Tile
					color={color}
					icon={icon}
					iconAccent={iconAccent}
					size={132}
					isRound={isRound}
					isRounded={isRounded}
					text={text}
				/>
				<Tile
					color={color}
					icon={icon}
					iconAccent={iconAccent}
					size={128}
					isRound={isRound}
					isRounded={isRounded}
					text={text}
					colorAccent={colorAccent}
				/>
			</Flex>
		</Flex>
	)
}

export default ExampleTile
