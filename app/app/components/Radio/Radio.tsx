"use client"

import { useState } from "react"
import { Flex, Radio as RadioComponent } from "../../../../src"
import type { RadioProps } from "./Radio.types"

const Radio: React.FC<RadioProps> = () => {
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
