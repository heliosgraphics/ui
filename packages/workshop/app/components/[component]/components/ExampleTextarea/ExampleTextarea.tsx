"use client"

import { Flex, Separator, Textarea } from "@heliosgraphics/ui"
import { useContext, useState, type FC } from "react"
import type { ExampleTextareaProps } from "./ExampleTextarea.types"
import { WorkshopContext } from "workshop/app/contexts/WorkshopContext"

const ExampleTextarea: FC<ExampleTextareaProps> = () => {
	const { isDisabled } = useContext(WorkshopContext)
	const [textarea, setTextarea] = useState<string>("")
	const onTextareaChange = (e: any) => setTextarea(e.target.value)

	return (
		<>
			<Separator isLight={true} />
			<Flex padding={16}>
				<Textarea
					onChange={onTextareaChange}
					value={textarea}
					placeholder="Hello"
					isDisabled={isDisabled}
					label="Description"
					helperText="Fill this with love"
				/>
			</Flex>
		</>
	)
}

export default ExampleTextarea
