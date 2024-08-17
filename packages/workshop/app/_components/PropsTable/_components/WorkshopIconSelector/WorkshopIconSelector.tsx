"use client"

import { useContext, type FC, type ChangeEvent } from "react"
import { Button, ButtonGroup, Flex, Select, ICONS, type HeliosIconType } from "@heliosgraphics/ui"
import { WorkshopContext } from "workshop/app/_contexts/WorkshopContext"

let lastIcon: HeliosIconType

export const WorkshopIconSelector: FC = () => {
	const { icon, setIcon } = useContext(WorkshopContext)

	const icons = ICONS.map((icon) => ({ name: icon, value: icon }))
	const onIconChange = (event: ChangeEvent<HTMLSelectElement>) => setIcon(event.target.value as HeliosIconType)

	const onRandom = () => {
		let randomIcon

		do {
			randomIcon = ICONS[Math.floor(Math.random() * ICONS.length)]
		} while (lastIcon === randomIcon)

		lastIcon = randomIcon

		return setIcon(randomIcon)
	}

	return (
		<Flex gap={4}>
			<Select
				label="Icon Selector"
				isLabelHidden={true}
				items={icons}
				onChange={onIconChange}
				selectedValue={icon}
				isSmall={true}
			/>
			<ButtonGroup>
				<Button intent="silent" value="Random" onClick={onRandom} size="small" />
			</ButtonGroup>
		</Flex>
	)
}
