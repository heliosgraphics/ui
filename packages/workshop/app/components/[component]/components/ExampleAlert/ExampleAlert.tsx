"use client"

import { useContext } from "react"
import { Flex, Alert, INTENT_DESCRIPTIONS } from "@heliosgraphics/ui"
import { WorkshopContext } from "workshop/app/contexts/WorkshopContext"
import type { FC } from "react"
import type { ExampleAlertProps } from "./ExampleAlert.types"

const ExampleAlert: FC<ExampleAlertProps> = () => {
	const { intent } = useContext(WorkshopContext)
	const onClose = () => console.log(0)

	return (
		<Flex isColumn={true} gap={12}>
			<Alert intent={intent} icon="info" onClose={onClose}>
				{INTENT_DESCRIPTIONS[intent]}
			</Alert>
			<Alert title="Vitae, assumenda aliquid" intent={intent} icon="info" onClose={onClose}>
				Cupiditate <a>aspernatur autem</a> tempore magnam vitae, assumenda aliquid ab illo necessitatibus velit
				temporibus corrupti quidem. Incidunt facilis aspernatur corrupti doloremque?
			</Alert>
		</Flex>
	)
}

export default ExampleAlert
