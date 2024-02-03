"use client"

import React, { useState, useContext } from "react"
import {
	Button,
	ButtonGroup,
	Separator,
	Toggle,
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
	const [isVertical, setVertical] = useState<boolean>(false)

	const onJoinedToggle = () => {
		const newAlignIndex =
			alignIndex >= BUTTON_ALIGNS.length - 1 ? 0 : alignIndex + 1

		setAlignIndex(newAlignIndex)
	}

	const onVerticalToggle = () => setVertical(!isVertical)

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
				<Toggle
					label="Vertical"
					intent="silent"
					onChange={onVerticalToggle}
					isDisabled={alignIndex !== 3}
				/>
			</ButtonGroup>
			<Separator />
			<ButtonGroup
				isVertical={isVertical}
				align={BUTTON_ALIGNS[alignIndex] as ButtonGroupProps["align"]}
			>
				<Button intent="silent" value="Cancel" />
				<Button intent={intent} value="Start" />
			</ButtonGroup>
			<ButtonGroup
				isVertical={isVertical}
				align={BUTTON_ALIGNS[alignIndex] as ButtonGroupProps["align"]}
			>
				<Button
					intent="silent"
					value="Cancel"
					size="small"
					isIconOnly={isVertical}
					icon="bullseye"
				/>
				<Button
					intent="silent"
					value="Cancel"
					size="small"
					isIconOnly={isVertical}
					icon="bullseye"
				/>
				<Button
					intent={intent}
					value="Start"
					size="small"
					isIconOnly={isVertical}
					icon="arrow-up"
				/>
			</ButtonGroup>
			<ButtonGroup
				isVertical={isVertical}
				align={BUTTON_ALIGNS[alignIndex] as ButtonGroupProps["align"]}
			>
				<Button intent="silent" value="Cancel" size="tiny" />
				<Button intent={intent} value="Start" size="tiny" />
			</ButtonGroup>
		</Flex>
	)
}

export default ExamplesButtonGroup
