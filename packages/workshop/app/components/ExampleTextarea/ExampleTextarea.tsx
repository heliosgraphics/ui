"use client"

import { Textarea } from "@heliosgraphics/ui"
import { useState, type FC } from "react"
import type { ExampleTextareaProps } from "./ExampleTextarea.types"

const ExampleTextarea: FC<ExampleTextareaProps> = () => {
	const [textarea, setTextarea] = useState<string>("")
	const onTextareaChange = (e) => setTextarea(e.target.value)

	return <Textarea onChange={onTextareaChange} value={textarea} />
}

export default ExampleTextarea
