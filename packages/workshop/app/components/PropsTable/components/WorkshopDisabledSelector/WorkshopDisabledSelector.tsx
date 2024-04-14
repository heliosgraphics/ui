"use client"

import { useContext, type FC } from "react"
import { Flex, Toggle } from "@heliosgraphics/ui"
import { WorkshopContext } from "workshop/app/contexts/WorkshopContext"
import type { WorkshopDisabledSelectorProps } from "./WorkshopDisabledSelector.types"

const WorkshopDisabledSelector: FC<WorkshopDisabledSelectorProps> = () => {
	const { isDisabled, setDisabled } = useContext(WorkshopContext)

	const onDisabledToggle = () => setDisabled(!isDisabled)

	return (
		<Flex isCentered={true}>
			<Toggle
				intent="silent"
				isChecked={isDisabled}
				label="Is Disabled"
				isSmall={true}
				onChange={onDisabledToggle}
				isLabelHidden={true}
			/>
		</Flex>
	)
}

export default WorkshopDisabledSelector
