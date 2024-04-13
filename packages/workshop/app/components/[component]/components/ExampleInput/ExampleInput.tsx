"use client"

import { Flex, Input, type ResultItem } from "@heliosgraphics/ui"
import { useState, type FC } from "react"
import type { ExampleInputProps } from "./ExampleInput.types"

const ExampleInput: FC<ExampleInputProps> = () => {
	const [input, setInput] = useState<string>("")
	const [input2, setInput2] = useState<string>("")
	const [isActive, setActive] = useState<boolean>(false)

	const onInputChange = (event: any) => setInput(event.target.value)
	const onInputChange2 = (event: any) => {
		const newValue: string = event.target.value
		const isEmpty = !newValue

		setActive(!isEmpty)
		setInput2(newValue)
	}

	const onHideResultsClick = () => {
		console.info("on hide results click")
		setActive(false)
	}

	const resultListItems: Array<ResultItem> = [
		{ name: "First Item", icon: "bullseye", onClick: onHideResultsClick },
		{
			name: "Second Item",
			icon: "pin",
			onClick: onHideResultsClick,
		},

		{ name: "Random Item", icon: "pin", onClick: onHideResultsClick },
		{ name: "Active Item", icon: "pin", onClick: onHideResultsClick },
		{
			name: "Lorem Ipsum Dolor Sit Ameta",
			icon: "pin",
			onClick: onHideResultsClick,
		},
	]

	const onBlur = () => setTimeout(() => setActive(false), 120)
	const onFocus = () => !!input2 && setActive(true)

	return (
		<Flex isColumn={true} gap={8}>
			<Input value={input} label="Your Name" onChange={onInputChange} placeholder="Jane Doe" />
			<Input
				value={!!input ? "Disabled Content" : ""}
				isDisabled={true}
				label="Disabled Input"
				placeholder="Disabled Placeholder"
			/>
			<Input
				value={input2}
				isLoading={true}
				onFocus={onFocus}
				onBlur={onBlur}
				onChange={onInputChange2}
				showResults={isActive}
				placeholder="Placeholder"
				label="Not Ready"
				results={resultListItems}
				helperText="Lorem ipsum dolor sit amet."
			/>
		</Flex>
	)
}

export default ExampleInput
