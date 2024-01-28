"use client"

import React, { useContext, useState } from "react"
import {
	Button,
	ButtonGroup,
	Separator,
	Flex,
	Text,
	Alert,
	HeliosIntentionType,
} from "../../../../src"
import type { ExamplesAlertProps } from "./ExamplesAlert.types"
import IntentSelector from "../IntentSelector"
import { IntentContext } from "../../contexts/IntentContext"

const INTENT_DESCRIPTIONS = {
	advise:
		"Offering guidance or recommendations based on expertise or experience, allowing for personal choice.",
	assert:
		"Confidently stating something as a fact, often without room for debate or disagreement.",
	automation:
		"Indicating a process or action that is performed automatically without human intervention.",
	confirmation:
		"Seeking or providing verification of a completed action or decision.",
	error:
		"Signaling that a mistake or problem has occurred in a process or system.",
	highlight: "Emphasizing important information or key features.",
	question:
		"Asking for information or clarification on a specific topic or issue.",
	silent:
		"Indicating an action or process that occurs without any noticeable signs or announcements.",
	success:
		"Announcing the successful completion or positive outcome of an action or process.",
	warning: "Alerting to potential danger, risk, or an unfavorable outcome.",
	small: "Referring to a minor or less significant alert or message.",
	normal: "Indicating a standard or usual alert or message.",
	withButton:
		"Featuring an interactive button, typically for user response or action.",
}

const ExamplesAlert: React.FC<ExamplesAlertProps> = () => {
	const { intent } = useContext(IntentContext)
	const onClose = () => console.log(0)

	return (
		<Flex isColumn={true} gap={12}>
			<IntentSelector />
			<Separator isLight={true} />
			<Alert intent={intent} icon="info" onClose={onClose}>
				{INTENT_DESCRIPTIONS[intent]}
			</Alert>
			<Alert
				title="Vitae, assumenda aliquid"
				intent={intent}
				icon="info"
				onClose={onClose}
			>
				Cupiditate <a>aspernatur autem</a> tempore magnam vitae, assumenda
				aliquid ab illo necessitatibus velit temporibus corrupti quidem.
				Incidunt facilis aspernatur corrupti doloremque?
			</Alert>
		</Flex>
	)
}

export default ExamplesAlert
