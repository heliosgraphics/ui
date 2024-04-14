"use client"

import { useState, type FC } from "react"
import type { ExampleRadioProps } from "./ExampleRadio.types"
import LiveComponent from "../LiveComponent"

const SAMPLE_CODE = `<Flex isColumn={true} gap={4}>
	<Radio
		label="Radio 01"
		intent={intent}
		onChange={onRadioFirst}
		value="radio-01"
		isDisabled={isDisabled}
		state={radio} />
	<Radio
		label="Radio 02"
		intent={intent}
		onChange={onRadioSecond}
		isDisabled={isDisabled}
		value="radio-02"
		state={radio} />
</Flex>`

const ExampleRadio: FC<ExampleRadioProps> = () => {
	const [radio, setRadio] = useState<string>("radio-01")

	const onRadioFirst = () => setRadio("radio-01")
	const onRadioSecond = () => setRadio("radio-02")
	const onRadioThird = () => setRadio("radio-03")

	return <LiveComponent code={SAMPLE_CODE} scope={{ radio, onRadioFirst, onRadioSecond, onRadioThird }} />
}

export default ExampleRadio
