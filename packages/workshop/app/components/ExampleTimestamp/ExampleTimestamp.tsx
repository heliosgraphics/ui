"use client"

import { useState, type FC } from "react"
import { Alert, Button, ButtonGroup, Flex, Separator, Timestamp } from "@heliosgraphics/ui"
import type { ExampleTimestampProps } from "./ExampleTimestamp.types"

const ExampleTimestamp: FC<ExampleTimestampProps> = () => {
	const [isFromNow, setFromNow] = useState<boolean>(false)

	const onFromNowClick = () => setFromNow(!isFromNow)

	const date: string = new Date().toISOString()

	return (
		<Flex isColumn={true} gap={8}>
			<Alert intent="silent" icon="info">
				WIP
			</Alert>
			<ButtonGroup>
				<Button intent="silent" size="small" value="From Now" onClick={onFromNowClick} />
			</ButtonGroup>
			<Separator isLight={true} />
			<Timestamp date={date} fromNow={isFromNow} />
			<Timestamp date={date} text="Date: " fromNow={isFromNow} />
			<Timestamp date={date} text="Format: " format="YYYY-MM-DD" fromNow={isFromNow} />
		</Flex>
	)
}

export default ExampleTimestamp
