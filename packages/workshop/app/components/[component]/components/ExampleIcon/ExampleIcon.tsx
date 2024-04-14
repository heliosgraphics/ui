"use client"

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
	const { emphasis } = useContext(WorkshopContext)

	return (
		<>
			<LiveComponent code={MOCK_CODE} scope={{ emphasis }} />
		</>
	)
}

export default ExampleIcon
