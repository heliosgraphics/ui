"use client"

import { Flex, Input, Separator, type ResultItem } from "@heliosgraphics/ui"
import { useState, type FC, type ChangeEvent } from "react"

export const ExampleInput: FC = () => {
	const [_input, setInput] = useState<string>("")
	const [input2, setInput2] = useState<string>("")
	const [isActive, setActive] = useState<boolean>(false)

	const _onInputChange = (event: ChangeEvent<HTMLInputElement>) => setInput(event.target.value)
	const onInputChange2 = (event: ChangeEvent<HTMLInputElement>) => {
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
		<>
			<Separator isLight={true} />
			<Flex isColumn={true} gap={8} padding={16}>
				<Input
					name="ui-input-example"
					value={input2}
					isLoading={false}
					onFocus={onFocus}
					onBlur={onBlur}
					onChange={onInputChange2}
					showResults={isActive}
					placeholder="Placeholder"
					label="Favorite Places"
					results={resultListItems}
					helperText="Start typing to see how results work"
				/>
			</Flex>
		</>
	)
}
