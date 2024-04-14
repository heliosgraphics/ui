"use client"

import { useState, type FC } from "react"
import type { ExampleCheckboxProps } from "./ExampleCheckbox.types"
import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"

const CODE_SAMPLE = `<Flex isColumn={true} gap={4}>
	<Checkbox
		isChecked={isChecked}
		intent={intent}
		isDisabled={isDisabled}
		label="Fully Autonomous"
		onChange={onToggle} />
</Flex>`

const ExampleCheckbox: FC<ExampleCheckboxProps> = () => {
	const [isChecked, setChecked] = useState<boolean>(false)

	const onToggle = () => setChecked(!isChecked)

	return (
		<>
			<LiveComponent code={CODE_SAMPLE} scope={{ isChecked, onToggle }} />
		</>
	)
}

export default ExampleCheckbox
