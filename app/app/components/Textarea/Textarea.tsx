"use client"

import { useState } from "react"
import { Textarea as TextareaComponent } from "../../../../src"
import type { FormProps } from "./Textarea.types"

const Textarea: React.FC<FormProps> = () => {
	const [textarea, setTextarea] = useState<string>("")
	const onTextareaChange = (e) => setTextarea(e.target.value)

	return <TextareaComponent onChange={onTextareaChange} value={textarea} />
}

export default Textarea
