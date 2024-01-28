"use client"

import { useState } from "react"
import { Checkbox as CheckboxComponent } from "../../../../src"
import type { CheckboxProps } from "./Checkbox.types"

const Checkbox: React.FC<CheckboxProps> = () => {
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

export default Checkbox
