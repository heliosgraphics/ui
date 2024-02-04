"use client"

import { Input, Button, ButtonGroup, Form } from "@heliosgraphics/ui"
import { useState, type FC } from "react"
import type { ExampleFormProps } from "./ExampleForm.types"

const ExampleForm: FC<ExampleFormProps> = () => {
	const onFormSubmit = (e) => console.log(e)
	const [formInput, setFormInput] = useState<string>("")
	const [formPassword, setFormPassword] = useState<string>("")

	const onFormInputChange = (e) => setFormInput(e.target.value)
	const onFormPasswordChange = (e) => setFormPassword(e.target.value)

	return (
		<Form onSubmit={onFormSubmit}>
			<Input label="Input" value={formInput} onChange={onFormInputChange} />
			<Input
				label="Password"
				value={formPassword}
				onChange={onFormPasswordChange}
			/>
			<ButtonGroup>
				<Button value="Cancel" intent="silent" />
				<Button type="submit" value="Submit" intent="advise" />
			</ButtonGroup>
		</Form>
	)
}

export default ExampleForm
