"use client"

import { useState, type FC } from "react"
import { Flex, Radio as RadioComponent } from "@heliosgraphics/components"
import type { RadioProps } from "./Radio.types"

const Radio: FC<RadioProps> = () => {
	const [radio, setRadio] = useState<string>("")
	const onRadioFirst = () => setRadio("radio-01")
	const onRadioSecond = () => setRadio("radio-02")

	return (
		<Flex>
			<RadioComponent
				label="Radio 01"
				onChange={onRadioFirst}
				value="radio-01"
				state={radio}
			/>
			<RadioComponent
				label="Radio 02"
				onChange={onRadioSecond}
				value="radio-02"
				state={radio}
			/>
		</Flex>
	)
}

export default Radio
