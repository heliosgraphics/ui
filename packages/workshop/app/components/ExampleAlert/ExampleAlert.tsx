"use client"

import { useContext } from "react"
import { Button, Flex, Alert, HeliosIntentionType, ButtonGroup } from "@heliosgraphics/ui"
import { WorkshopContext } from "../../contexts/WorkshopContext"
import type { FC } from "react"
import type { ExampleAlertProps } from "./ExampleAlert.types"

const INTENT_DESCRIPTIONS: Record<HeliosIntentionType, string> = {
	advise: "Offering guidance or recommendations based on expertise or experience, allowing for personal choice.",
	automation: "Indicating a process or action that is performed automatically without human intervention.",
	confirmation: "Seeking or providing verification of a completed action or decision.",
	error: "Signaling that a mistake or problem has occurred in a process or system.",
	highlight: "Emphasizing important information or key features.",
	question: "Asking for information or clarification on a specific topic or issue.",
	silent: "Indicating an action or process that occurs without any noticeable signs or announcements.",
	success: "Announcing the successful completion or positive outcome of an action or process.",
	warning: "Alerting to potential danger, risk, or an unfavorable outcome.",
}

const ExampleAlert: FC<ExampleAlertProps> = () => {
	const { intent } = useContext(WorkshopContext)
	const onClose = () => console.log(0)

	return (
		<Flex isColumn={true} gap={0}>
			<Alert intent={intent} icon="info" onClose={onClose}>
				{INTENT_DESCRIPTIONS[intent]}
			</Alert>
			<ButtonGroup>
				<Button value="Tes" intent="silent" isDisabled={true} />
			</ButtonGroup>
			<Alert title="Vitae, assumenda aliquid" intent={intent} icon="info" onClose={onClose}>
				Cupiditate <a>aspernatur autem</a> tempore magnam vitae, assumenda aliquid ab illo necessitatibus velit
				temporibus corrupti quidem. Incidunt facilis aspernatur corrupti doloremque?
			</Alert>
		</Flex>
	)
}

export default ExampleAlert
