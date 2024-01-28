"use client"

import React, { useState } from "react"
import {
	Button,
	ButtonGroup,
	Separator,
	Flex,
	Text,
	Alert,
	type HeliosIntentionType,
} from "../../../../src"
import type { AlertsProps } from "./Alerts.types"

const Alerts: React.FC<AlertsProps> = () => {
	const onClose = () => console.log(0)

	return (
		<Flex isColumn={true} gap={12}>
			<Text type="paragraph">Compact</Text>

			<Alert intent="advise" icon="info" onClose={onClose}>
				Advise, perferendis unde cupiditate tempore magnam corrupti quidem.
			</Alert>
			<Alert intent="automation" icon="info" onClose={onClose}>
				Advise, perferendis unde cupiditate tempore magnam corrupti quidem.
			</Alert>
			<Alert intent="confirmation" icon="info" onClose={onClose}>
				Confirmation? Perferendis unde cupiditate tempore magnam corrupti
				quidem.
			</Alert>
			<Alert intent="error" icon="info" onClose={onClose}>
				Error, lorem ipsum dolor sit amet consectetur adipisicing elit.
				Perferendis unde cupiditate <a>aspernatur autem</a> tempore magnam
				vitae, quidem. Incidunt facilis aspernatur corrupti doloremque?
			</Alert>
			<Alert intent="highlight" icon="info" onClose={onClose}>
				Highlight, lorem ipsum dolor sit amet consectetur adipisicing elit.
				Perferendis unde cupiditate <a>aspernatur autem</a> tempore magnam.
			</Alert>
			<Alert intent="question" icon="info" onClose={onClose}>
				Question, lorem ipsum dolor sit amet consectetur adipisicing elit.
				Perferendis unde cupiditate <a>aspernatur autem</a> tempore magnam
				vitae.
			</Alert>
			<Alert intent="success" icon="info" onClose={onClose}>
				Success, lorem ipsum dolor sit amet consectetur adipisicing elit.
				Perferendis unde cupiditate <a>aspernatur autem</a> tempore magnam
				vitae.
			</Alert>
			<Alert intent="silent" icon="info" onClose={onClose}>
				Success, lorem ipsum dolor sit amet consectetur adipisicing elit.
				Perferendis unde cupiditate <a>aspernatur autem</a> tempore magnam
				vitae.
			</Alert>
			<Alert intent="warning" icon="info" onClose={onClose}>
				Warning, lorem ipsum dolor sit amet cons?
			</Alert>

			<Text type="paragraph">Title</Text>

			<Alert
				title="Vitae, assumenda aliquid"
				intent="advise"
				icon="info"
				onClose={onClose}
			>
				Cupiditate <a>aspernatur autem</a> tempore magnam vitae, assumenda
				aliquid ab illo necessitatibus velit temporibus corrupti quidem.
				Incidunt facilis aspernatur corrupti doloremque?
			</Alert>
			<Alert
				title="Vitae, assumenda aliquid"
				intent="confirmation"
				icon="info"
				onClose={onClose}
			>
				Cupiditate <a>aspernatur autem</a> tempore magnam vitae, assumenda
				aliquid ab illo necessitatibus velit temporibus corrupti quidem.
				Incidunt facilis aspernatur corrupti doloremque?
			</Alert>
			<Alert
				title="Vitae, assumenda aliquid"
				intent="error"
				icon="info"
				onClose={onClose}
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
				unde cupiditate <a>aspernatur autem</a> tempore magnam vitae, assumenda
				aliquid ab illo necessitatibus velit temporibus corrupti quidem.
				Incidunt facilis aspernatur corrupti doloremque?
			</Alert>
			<Alert
				title="Vitae, assumenda aliquid"
				intent="highlight"
				icon="info"
				onClose={onClose}
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
				unde cupiditate <a>aspernatur autem</a> tempore magnam vitae, assumenda
				aliquid ab illo necessitatibus velit temporibus corrupti quidem.
				Incidunt facilis aspernatur corrupti doloremque?
			</Alert>
			<Alert
				title="Vitae, assumenda aliquid"
				intent="question"
				icon="info"
				onClose={onClose}
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
				unde cupiditate <a>aspernatur autem</a> tempore magnam vitae, assumenda
				aliquid ab illo necessitatibus velit temporibus corrupti quidem.
				Incidunt facilis aspernatur corrupti doloremque?
			</Alert>

			<Alert
				title="Vitae, assumenda aliquid"
				intent="success"
				icon="info"
				onClose={onClose}
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
				unde cupiditate <a>aspernatur autem</a> tempore magnam vitae, assumenda
				aliquid ab illo necessitatibus velit temporibus corrupti quidem.
				Incidunt facilis aspernatur corrupti doloremque?
			</Alert>
			<Alert
				title="Random Warning"
				intent="warning"
				icon="info"
				onClose={onClose}
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
				unde cupiditate <a>aspernatur autem</a> tempore magnam vitae, assumenda
				aliquid ab illo necessitatibus velit temporibus corrupti quidem.
				Incidunt facilis aspernatur corrupti doloremque?
			</Alert>
		</Flex>
	)
}

export default Alerts
