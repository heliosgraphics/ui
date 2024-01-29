"use client"

import React, { useState, useContext } from "react"
import {
	Button,
	ButtonGroup,
	Separator,
	Flex,
	Text,
	type ButtonGroupProps,
	type HeliosIntentionType,
} from "../../../../src"
import { IntentContext } from "../../contexts/IntentContext"
import type { ExamplesButtonGroupProps } from "./ExamplesButtonGroup.types"

const BUTTON_ALIGNS = ["left", "center", "right", "join"]

const ExamplesButtonGroup: React.FC<ExamplesButtonGroupProps> = () => {
	const { intent } = useContext(IntentContext)
	const [alignIndex, setAlignIndex] = useState<number>(0)

	const onJoinedToggle = () => {
		const newAlignIndex =
			alignIndex >= BUTTON_ALIGNS.length - 1 ? 0 : alignIndex + 1

		setAlignIndex(newAlignIndex)
	}

	return (
		<Flex isColumn={true} gap={8}>
			<ButtonGroup>
				<Button
					size="small"
					value="Align"
					intent="silent"
					onClick={onJoinedToggle}
				/>
				<Text type="tiny" fontFamily="mono">
					{BUTTON_ALIGNS[alignIndex]}
				</Text>
			</ButtonGroup>
			<Separator />
			<ButtonGroup
				align={BUTTON_ALIGNS[alignIndex] as ButtonGroupProps["align"]}
			>
				<Button intent="silent" value="Cancel" />
				<Button intent={intent} value="Start" />
			</ButtonGroup>
			<ButtonGroup
				align={BUTTON_ALIGNS[alignIndex] as ButtonGroupProps["align"]}
			>
				<Button intent="silent" value="Cancel" size="small" />
				<Button intent={intent} value="Start" size="small" />
			</ButtonGroup>
			<ButtonGroup
				align={BUTTON_ALIGNS[alignIndex] as ButtonGroupProps["align"]}
			>
				<Button intent="silent" value="Cancel" size="tiny" />
				<Button intent={intent} value="Start" size="tiny" />
			</ButtonGroup>
		</Flex>
	)
}

export default ExamplesButtonGroup
