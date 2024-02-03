"use client"

import { useState } from "react"
import { Checkbox as CheckboxComponent } from "../../../../src"
import type { FC } from "react"
import type { CheckboxProps } from "./Checkbox.types"

const Checkbox: FC<CheckboxProps> = () => {
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
