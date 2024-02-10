"use client"

import { useState, useContext, type FC } from "react"
import { Separator, Flex, Text, Radio } from "@heliosgraphics/ui"
import { IntentContext } from "../../contexts/IntentContext"
import type { ExampleRadioProps } from "./ExampleRadio.types"

const ExampleRadio: FC<ExampleRadioProps> = () => {
	const { intent } = useContext(IntentContext)
	const [radio, setRadio] = useState<string>("radio-01")

	const onRadioFirst = () => setRadio("radio-01")
	const onRadioSecond = () => setRadio("radio-02")
	const onRadioThird = () => setRadio("radio-03")

	return (
		<Flex isColumn={true} gap={6}>
			<Text type="small">{radio}</Text>
			<Radio label="Radio 01" intent={intent} onChange={onRadioFirst} value="radio-01" state={radio} />
			<Radio label="Radio 02" intent={intent} onChange={onRadioSecond} value="radio-02" state={radio} />
			<Separator />
			<Radio label="Radio 03" intent={intent} onChange={onRadioThird} value="radio-03" isSmall={true} state={radio} />
		</Flex>
	)
}

export default ExampleRadio
