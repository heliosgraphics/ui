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
	const inInputChange = (event) => setInput(event.target.value)

	return <InputComponent value={input} label="Input" onChange={inInputChange} />
}

export default Input
