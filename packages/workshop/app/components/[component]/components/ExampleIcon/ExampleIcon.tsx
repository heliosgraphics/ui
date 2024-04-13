"use client"

import { Flex, Select, EMPHASES, Separator } from "@heliosgraphics/ui"
import { useContext, type FC } from "react"
import { WorkshopContext } from "workshop/app/contexts/WorkshopContext"
import type { ExampleIconProps } from "./ExampleIcon.types"
import LiveComponent from "../LiveComponent"

const MOCK_CODE = `<Flex gap={4}>
	<Icon icon={icon} size={64} emphasis={emphasis}/>
	<Icon icon={icon} size={32} emphasis={emphasis}/>
	<Icon icon={icon} size={24} emphasis={emphasis}/>
	<Icon icon={icon} size={16} emphasis={emphasis}/>
</Flex>`

const ExampleIcon: FC<ExampleIconProps> = () => {
	const { emphasis, setEmphasis } = useContext(WorkshopContext)
	const items = EMPHASES.map((emphasis) => {
		return { name: emphasis, value: emphasis }
	})

	const onEmphasisChange = (event) => setEmphasis(event.target.value)

	return (
		<>
			<LiveComponent code={MOCK_CODE} scope={{ emphasis }} />
			<Separator isLight={true} />
			<Flex isColumn={true} gap={4} padding={16}>
				<Select items={items} onChange={onEmphasisChange} label={emphasis} />
			</Flex>
		</>
	)
}

export default ExampleIcon
