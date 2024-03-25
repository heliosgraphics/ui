"use client"

import { Flex, Tile, Separator, Checkbox } from "@heliosgraphics/ui"
import { WorkshopContext } from "workshop/app/contexts/WorkshopContext"
import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import { useContext, useState, type FC } from "react"
import type { ExampleTileProps } from "./ExampleTile.types"

const ExampleTile: FC<ExampleTileProps> = () => {
	const [isRounded, setRounded] = useState<boolean>(true)
	const [isRound, setRound] = useState<boolean>(false)
	const [text, setText] = useState<string | undefined>(undefined)

	const { color, colorAccent, icon, iconAccent } = useContext(WorkshopContext)

	const onToggleRound = () => setRound(!isRound)
	const onToggleRounded = () => setRounded(!isRounded)
	const onToggleText = () => setText(text ? undefined : "Lorem Ipsum")

	const CODE_SAMPLE = `<Tile
	color={color}
	icon={icon}
	iconAccent={iconAccent}
	size={64}
	isRound={isRound}
	isRounded={isRounded}
	colorAccent={colorAccent}/>`

	return (
		<>
			<LiveComponent code={CODE_SAMPLE} scope={{ iconAccent, isRound, isRounded, colorAccent }} />
			<Separator isLight={true} />
			<Flex gap={12} isColumn={true} padding={16}>
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
						text={text}
					/>
					<Tile
						color={color}
						icon={icon}
						iconAccent={iconAccent}
						size={64}
						isRound={isRound}
						isRounded={isRounded}
						text={text}
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

				<Flex isColumn={true} gap={4}>
					<Checkbox label="Round" isSmall={true} intent="silent" onChange={onToggleRound} isChecked={isRound} />
					<Checkbox label="Rounded" isSmall={true} intent="silent" onChange={onToggleRounded} isChecked={isRounded} />
					<Checkbox label="Text" isSmall={true} intent="silent" onChange={onToggleText} isChecked={!!text} />
				</Flex>
			</Flex>
		</>
	)
}

export default ExampleTile
