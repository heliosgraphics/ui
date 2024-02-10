import { useContext, type FC } from "react"
import { Flex, Select, INTENTIONS, ButtonGroup, Button } from "@heliosgraphics/ui"
import { IntentContext } from "../../contexts/IntentContext"
import type { IntentSelectorProps } from "./IntentSelector.types"

let lastIntention

const IntentSelector: FC<IntentSelectorProps> = () => {
	const { intent, setIntent } = useContext(IntentContext)

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

	const onSilent = () => setIntent("silent")
	const onAdvise = () => setIntent("advise")

	return (
		<Flex gap={4}>
			<Select items={items} onChange={onIntentChange} selectedValue={intent} />
			<ButtonGroup>
				<Button intent="silent" value="Random" onClick={onRandom} />
				<Button intent="silent" value="Silent" onClick={onSilent} />
				<Button intent="silent" value="Advise" onClick={onAdvise} />
			</ButtonGroup>
		</Flex>
	)
}

export default IntentSelector
