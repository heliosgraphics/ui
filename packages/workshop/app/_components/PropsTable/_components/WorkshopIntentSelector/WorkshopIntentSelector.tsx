"use client"

import { useContext, type FC, type ChangeEvent } from "react"
import { Flex, Select, INTENTIONS, ButtonGroup, Button, type HeliosIntentionType } from "@heliosgraphics/ui"
import { WorkshopContext } from "workshop/app/_contexts/WorkshopContext"

let lastIntention: HeliosIntentionType

export const WorkshopIntentSelector: FC = () => {
	const { intent, setIntent } = useContext(WorkshopContext)

	const items = INTENTIONS.map((intention) => {
		return { name: intention, value: intention }
	})

	const onIntentChange = (event: ChangeEvent<HTMLSelectElement>) => setIntent(event.target.value as HeliosIntentionType)

	const onRandom = () => {
		let randomIntention

		do {
			randomIntention = INTENTIONS[Math.floor(Math.random() * INTENTIONS.length)]
		} while (lastIntention === randomIntention)

		lastIntention = randomIntention

		return setIntent(randomIntention)
	}

	return (
		<Flex gap={4}>
			<Select
				items={items}
				onChange={onIntentChange}
				selectedValue={intent}
				label="Intent Selector"
				isLabelHidden={true}
				isSmall={true}
			/>
			<ButtonGroup>
				<Button intent="silent" value="Random" size="small" onClick={onRandom} />
			</ButtonGroup>
		</Flex>
	)
}
