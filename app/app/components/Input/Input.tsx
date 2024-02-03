"use client"

import { useState } from "react"
import {
	Flex,
	Button,
	ButtonGroup,
	Text,
	Input as InputComponent,
} from "../../../../src"
import type { InputProps } from "./Input.types"

const Input: React.FC<InputProps> = () => {
	const [input, setInput] = useState<string>("")
	const [input2, setInput2] = useState<string>("")

	const onInputChange = (event) => setInput(event.target.value)
	const onInputChange2 = (event) => setInput2(event.target.value)

	return (
		<Flex isColumn={true} gap={8}>
			{input}
			{input2}
			<InputComponent
				value={input}
				label="Your Name"
				onChange={onInputChange}
				placeholder="Jane 'Sicario' Doe"
			/>
			<InputComponent
				value={input2}
				label="Password Type"
				type="password"
				placeholder="Secure Password"
				onChange={onInputChange2}
			/>
			<InputComponent
				value="Disabled Content"
				isDisabled={true}
				label="Disabled Input"
			/>
			<InputComponent
				value="Loading Input"
				isLoading={true}
				label="Loading Input"
				helperText="Lorem ipsum dolor sit amet."
			/>
		</Flex>
	)
}

export default Input
