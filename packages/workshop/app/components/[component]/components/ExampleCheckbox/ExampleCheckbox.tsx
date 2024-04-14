"use client"

import { useContext, useState, type FC } from "react"
import { Flex, Separator, Checkbox } from "@heliosgraphics/ui"
import { WorkshopContext } from "workshop/app/contexts/WorkshopContext"
import type { ExampleCheckboxProps } from "./ExampleCheckbox.types"
import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"

const CODE_SAMPLE = `<Checkbox
	isChecked={isChecked}
	intent={intent}
	label="Fully Autonomous"
	onChange={onToggle} />`

const ExampleCheckbox: FC<ExampleCheckboxProps> = () => {
	const { intent } = useContext(WorkshopContext)
	const [isChecked, setChecked] = useState<boolean>(false)
	const [isChecked2, setChecked2] = useState<boolean>(true)
	const [isChecked3, setChecked3] = useState<boolean>(false)

	const onToggle = () => setChecked(!isChecked)
	const onToggle2 = () => setChecked2(!isChecked2)
	const onToggle3 = () => setChecked3(!isChecked3)

	return (
		<>
			<LiveComponent code={CODE_SAMPLE} scope={{ isChecked, onToggle }} />
			<Separator isLight={true} />
			<Flex isColumn={true} gap={8} padding={16}>
				<Flex isColumn={true} gap={4}>
					<Checkbox isChecked={isChecked} intent={intent} label="Fully Autonomous" onChange={onToggle} />
					<Checkbox isChecked={isChecked2} intent={intent} label="Geospatial View" onChange={onToggle2} />
					<Checkbox isChecked={false} isDisabled={true} intent={intent} label="Suicide Burn" />
				</Flex>
				<Separator isLight={true} />
				<Flex isColumn={true} gap={4}>
					<Checkbox isChecked={isChecked3} intent={intent} isSmall={true} label="Life Support" onChange={onToggle3} />
				</Flex>
			</Flex>
		</>
	)
}

export default ExampleCheckbox
