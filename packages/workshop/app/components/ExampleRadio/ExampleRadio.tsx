"use client"

import { useState, type FC } from "react"
import { Flex, Radio } from "@heliosgraphics/ui"
import type { ExampleRadioProps } from "./ExampleRadio.types"

const ExampleRadio: FC<ExampleRadioProps> = () => {
	const [radio, setRadio] = useState<string>("")
	const onRadioFirst = () => setRadio("radio-01")
	const onRadioSecond = () => setRadio("radio-02")

	return (
		<Flex>
			<Radio
				label="Radio 01"
				onChange={onRadioFirst}
				value="radio-01"
				state={radio}
			/>
			<Radio
				label="Radio 02"
				onChange={onRadioSecond}
				value="radio-02"
				state={radio}
			/>
		</Flex>
	)
}

export default ExampleRadio
