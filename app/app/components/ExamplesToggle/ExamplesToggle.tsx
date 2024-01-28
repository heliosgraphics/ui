"use client"

import React, { useContext, useState } from "react"
import {
	Button,
	ButtonGroup,
	Separator,
	Flex,
	Toggle,
	Text,
	Alert,
	HeliosIntentionType,
} from "../../../../src"
import type { ExamplesToggleProps } from "./ExamplesToggle.types"
import IntentSelector from "../IntentSelector"
import { IntentContext } from "../../contexts/IntentContext"

const ExamplesToggle: React.FC<ExamplesToggleProps> = () => {
	const { intent } = useContext(IntentContext)
	const [isChecked, setChecked] = useState<boolean>(false)

	const onToggle = () => setChecked(!isChecked)

	return (
		<Flex isColumn={true} gap={12}>
			<IntentSelector />
			<Separator isLight={true} />

			<Toggle
				isChecked={isChecked}
				intent={intent}
				label="Fully Autonomous"
				onChange={onToggle}
			/>

			<Toggle
				isChecked={isChecked}
				intent={intent}
				isSmall={true}
				label="Fully Autonomous"
				onChange={onToggle}
			/>
			<Toggle
				isChecked={isChecked}
				isDisabled={true}
				intent={intent}
				label="Fully Autonomous"
				onChange={onToggle}
			/>
		</Flex>
	)
}

export default ExamplesToggle
