"use client"

import React, { useState } from "react"
import {
	Button,
	ButtonGroup,
	Separator,
	Flex,
	Text,
	type HeliosIntentionType,
} from "../../../../src"
import type { ExamplesButtonGroupProps } from "./ExamplesButtonGroup.types"

const ExamplesButtonGroup: React.FC<ExamplesButtonGroupProps> = () => {
	const [intent, setIntent] = useState<HeliosIntentionType>("silent")

	return (
		<Flex isColumn={true} gap={16}>
			<ButtonGroup>
				<Button intent="silent" value="Cancel" />
				<Button intent="advise" value="Start" />
			</ButtonGroup>
			<ButtonGroup>
				<Button intent="silent" value="Cancel" size="small" />
				<Button intent="advise" value="Start" size="small" />
			</ButtonGroup>
			<ButtonGroup>
				<Button intent="silent" value="Cancel" size="tiny" />
				<Button intent="advise" value="Start" size="tiny" />
			</ButtonGroup>
		</Flex>
	)
}

export default ExamplesButtonGroup
