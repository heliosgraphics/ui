"use client"

import { useContext, type FC, type ChangeEvent } from "react"
import { Button, ButtonGroup, Flex, Select, ICONS, type HeliosIconType } from "@heliosgraphics/ui"
import { WorkshopContext } from "workshop/app/_contexts/WorkshopContext"

let lastIcon: HeliosIconType

export const WorkshopIconAccentSelector: FC = () => {
	const { iconAccent, setIconAccent } = useContext(WorkshopContext)

	const icons = ICONS.map((icon) => ({ name: icon, value: icon }))
	const onIconChange = (event: ChangeEvent<HTMLSelectElement>) => setIconAccent(event.target.value as HeliosIconType)

	const onRandom = () => {
		let randomIcon

		do {
			randomIcon = ICONS[Math.floor(Math.random() * ICONS.length)]
		} while (lastIcon === randomIcon)

		lastIcon = randomIcon

		return setIconAccent(randomIcon)
	}

	return (
		<Flex gap={4}>
			<Select
				label="Icon Accent Selector"
				isLabelHidden={true}
				items={icons}
				onChange={onIconChange}
				selectedValue={iconAccent}
				isSmall={true}
			/>
			<ButtonGroup>
				<Button intent="silent" value="Random" onClick={onRandom} size="small" />
			</ButtonGroup>
		</Flex>
	)
}
