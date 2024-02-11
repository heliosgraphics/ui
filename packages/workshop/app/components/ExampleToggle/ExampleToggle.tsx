"use client"

import { useContext, useState, type FC } from "react"
import { Flex, Separator, Toggle } from "@heliosgraphics/ui"
import { WorkshopContext } from "../../contexts/WorkshopContext"
import type { ExampleToggleProps } from "./ExampleToggle.types"

const ExampleToggle: FC<ExampleToggleProps> = () => {
	const { intent } = useContext(WorkshopContext)
	const [isChecked, setChecked] = useState<boolean>(false)
	const [isChecked2, setChecked2] = useState<boolean>(false)
	const [isChecked3, setChecked3] = useState<boolean>(false)

	const onToggle = () => setChecked(!isChecked)
	const onToggle2 = () => setChecked2(!isChecked2)
	const onToggle3 = () => setChecked3(!isChecked3)

	return (
		<Flex isColumn={true} gap={6}>
			<Toggle isChecked={isChecked} intent={intent} label="Fully Autonomous" onChange={onToggle} />
			<Toggle isChecked={isChecked2} intent={intent} label="Geospatial View" onChange={onToggle2} />
			<Toggle isChecked={false} isDisabled={true} intent={intent} label="Suicide Burn" />
			<Separator />
			<Toggle isChecked={isChecked3} intent={intent} isSmall={true} label="Life Support" onChange={onToggle3} />
		</Flex>
	)
}

export default ExampleToggle
