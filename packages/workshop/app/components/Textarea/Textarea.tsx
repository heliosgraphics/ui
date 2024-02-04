"use client"

import { useState, type FC } from "react"
import { Textarea as TextareaComponent } from "@heliosgraphics/components"
import type { FormProps } from "./Textarea.types"

const Textarea: FC<FormProps> = () => {
	const [textarea, setTextarea] = useState<string>("")
	const onTextareaChange = (e) => setTextarea(e.target.value)

	return <TextareaComponent onChange={onTextareaChange} value={textarea} />
}

export default Textarea
