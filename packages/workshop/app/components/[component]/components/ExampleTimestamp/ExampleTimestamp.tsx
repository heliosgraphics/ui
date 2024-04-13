"use client"

import { useState, type FC } from "react"
import { Checkbox, Flex, Separator } from "@heliosgraphics/ui"
import type { ExampleTimestampProps } from "./ExampleTimestamp.types"
import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"

const CODE_SAMPLE = `<Timestamp date={date} fromNow={isFromNow} format={format}/>`
const FORMAT = "YYYY-MM-DD"

const ExampleTimestamp: FC<ExampleTimestampProps> = () => {
	const [isFromNow, setFromNow] = useState<boolean>(false)
	const [format, setFormat] = useState<string | undefined>(FORMAT)

	const onFromNowToggle = () => setFromNow(!isFromNow)
	const onFormatToggle = () => setFormat(format === FORMAT ? undefined : FORMAT)

	const date: string = new Date().toISOString()

	return (
		<>
			<LiveComponent code={CODE_SAMPLE} scope={{ isFromNow, format, date }} />
			<Separator isLight={true} />
			<Flex gap={4} isColumn={true} padding={16}>
				<Checkbox label="From Now" isSmall={true} intent="silent" onChange={onFromNowToggle} isChecked={isFromNow} />
				<Checkbox label="With Format" isSmall={true} intent="silent" onChange={onFormatToggle} isChecked={!!format} />
			</Flex>
		</>
	)
}

export default ExampleTimestamp
