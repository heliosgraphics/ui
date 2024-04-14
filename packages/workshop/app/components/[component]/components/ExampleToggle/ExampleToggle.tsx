"use client"

import { useState, type FC } from "react"
import type { ExampleToggleProps } from "./ExampleToggle.types"
import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"

const CODE_SAMPLE = `<Flex isColumn={true} gap={4}>
	<Toggle
		isChecked={isChecked}
		intent={intent}
		isDisabled={isDisabled}
		label="Suicide Burn"
		onChange={onToggle} />
</Flex>`

const ExampleToggle: FC<ExampleToggleProps> = () => {
	const [isChecked, setChecked] = useState<boolean>(false)

	const onToggle = () => setChecked(!isChecked)

	return (
		<>
			<LiveComponent code={CODE_SAMPLE} scope={{ isChecked, onToggle }} />
		</>
	)
}

export default ExampleToggle
