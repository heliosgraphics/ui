"use client"

import { useContext, type FC } from "react"
import { Flex, Select, INTENTIONS, ButtonGroup, Button } from "@heliosgraphics/ui"
import { WorkshopContext } from "../../contexts/WorkshopContext"
import type { WorkshopIntentSelectorProps } from "./WorkshopIntentSelector.types"

let lastIntention

const WorkshopIntentSelector: FC<WorkshopIntentSelectorProps> = () => {
	const { intent, setIntent } = useContext(WorkshopContext)

	const items = INTENTIONS.map((intention) => {
		return { name: intention, value: intention }
	})

	const onIntentChange = (event) => setIntent(event.target.value)

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

export default WorkshopIntentSelector
