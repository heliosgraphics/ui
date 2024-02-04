"use client"

import { Flex, Input } from "@heliosgraphics/ui"
import { useState, type FC } from "react"
import type { ExampleInputProps } from "./ExampleInput.types"

const ExampleInput: FC<ExampleInputProps> = () => {
	const [input, setInput] = useState<string>("")
	const [input2, setInput2] = useState<string>("")

	const onInputChange = (event) => setInput(event.target.value)
	const onInputChange2 = (event) => setInput2(event.target.value)

	return (
		<Flex isColumn={true} gap={8}>
			{input}
			{input2}
			<Input
				value={input}
				label="Your Name"
				onChange={onInputChange}
				placeholder="Jane 'Sicario' Doe"
			/>
			<Input
				value={input2}
				label="Password Type"
				type="password"
				placeholder="Secure Password"
				onChange={onInputChange2}
			/>
			<Input
				value="Disabled Content"
				isDisabled={true}
				label="Disabled Input"
			/>
			<Input
				value="Loading Input"
				isLoading={true}
				label="Loading Input"
				helperText="Lorem ipsum dolor sit amet."
			/>
		</Flex>
	)
}

export default ExampleInput
