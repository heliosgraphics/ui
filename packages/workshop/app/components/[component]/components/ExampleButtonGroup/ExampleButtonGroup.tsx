"use client"

import { useState, useContext, type FC } from "react"
import { Button, ButtonGroup, Separator, Toggle, Flex, Text, type ButtonGroupProps } from "@heliosgraphics/ui"
import { WorkshopContext } from "workshop/app/contexts/WorkshopContext"
import type { ExampleButtonGroupProps } from "./ExampleButtonGroup.types"

const BUTTON_ALIGNS = ["left", "center", "right", "join"]

const ExampleButtonGroup: FC<ExampleButtonGroupProps> = () => {
	const { intent } = useContext(WorkshopContext)
	const [alignIndex, setAlignIndex] = useState<number>(0)
	const [isVertical, setVertical] = useState<boolean>(false)

	const onJoinedToggle = () => {
		const newAlignIndex = alignIndex >= BUTTON_ALIGNS.length - 1 ? 0 : alignIndex + 1

		setAlignIndex(newAlignIndex)
	}

	const onVerticalToggle = () => setVertical(!isVertical)

	return (
		<>
			<Separator isLight={true} />
			<Flex isColumn={true} gap={12} padding={16}>
				<ButtonGroup isVertical={isVertical} align={BUTTON_ALIGNS[alignIndex] as ButtonGroupProps["align"]}>
					<Button intent="silent" value="Cancel" isIconOnly={isVertical} icon="bullseye" />
					<Button intent={intent} value="Start" isIconOnly={isVertical} icon="x" />
				</ButtonGroup>
				<ButtonGroup isVertical={isVertical} align={BUTTON_ALIGNS[alignIndex] as ButtonGroupProps["align"]}>
					<Button intent="silent" value="Cancel" size="small" isIconOnly={isVertical} icon="bullseye" />
					<Button intent="silent" value="Cancel" size="small" isIconOnly={isVertical} icon="bullseye" />
					<Button intent={intent} value="Start" size="small" isIconOnly={isVertical} icon="arrow-up" />
				</ButtonGroup>
				<ButtonGroup isVertical={isVertical} align={BUTTON_ALIGNS[alignIndex] as ButtonGroupProps["align"]}>
					<Button intent="silent" value="Cancel" size="tiny" isIconOnly={isVertical} icon="bullseye" />
					<Button intent={intent} value="Start" size="tiny" isIconOnly={isVertical} icon="x" />
				</ButtonGroup>
				<Separator isLight={true} />
				<ButtonGroup>
					<Button size="small" value="Align" intent="silent" onClick={onJoinedToggle} />
					<Text type="tiny" fontFamily="mono">
						{BUTTON_ALIGNS[alignIndex]}
					</Text>
					<Toggle label="Vertical" intent="silent" onChange={onVerticalToggle} isDisabled={alignIndex !== 3} />
				</ButtonGroup>
			</Flex>
		</>
	)
}

export default ExampleButtonGroup
