"use client"

import { useState, type FC } from "react"
import {
	Input,
	Button,
	ButtonGroup,
	Form as FormComponent,
} from "@heliosgraphics/ui"
import type { FormProps } from "./Form.types"

const Form: FC<FormProps> = () => {
	const onFormSubmit = (e) => console.log(e)
	const [formInput, setFormInput] = useState<string>("")
	const [formPassword, setFormPassword] = useState<string>("")

	const onFormInputChange = (e) => setFormInput(e.target.value)
	const onFormPasswordChange = (e) => setFormPassword(e.target.value)

	return (
		<FormComponent onSubmit={onFormSubmit}>
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
		</FormComponent>
	)
}

export default Form
