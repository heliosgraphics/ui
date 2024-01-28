"use client"

import { useState } from "react"
import { Toggle as ToggleComponent } from "../../../../src"
import type { ToggleProps } from "./Toggle.types"

const Toggle: React.FC<ToggleProps> = () => {
	const [isToggled, setToggled] = useState<boolean>(false)
	const onToggleToggle = () => setToggled(!isToggled)

	return (
		<ToggleComponent
			label="Complete Autonomy"
			onChange={onToggleToggle}
			isChecked={isToggled}
		/>
	)
}

export default Toggle
