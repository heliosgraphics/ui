"use client"

import { Checkbox as CheckboxComponent } from "@heliosgraphics/ui"
import { useState, type FC } from "react"
import type { ExampleCheckboxProps } from "./ExampleCheckbox.types"

const ExampleCheckbox: FC<ExampleCheckboxProps> = () => {
	const [isChecked, setChecked] = useState<boolean>(false)
	const onCheckboxCheck = () => setChecked(!isChecked)

	return (
		<CheckboxComponent
			label="Automatic Updates"
			isChecked={isChecked}
			onChange={onCheckboxCheck}
		/>
	)
}

export default ExampleCheckbox
