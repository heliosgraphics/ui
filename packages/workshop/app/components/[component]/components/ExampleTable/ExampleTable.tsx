"use client"

import { type FC, useState } from "react"
import { Checkbox, Flex, Separator } from "@heliosgraphics/ui"
import type { ExampleTableProps } from "./ExampleTable.types"
import LiveComponent from "../LiveComponent"

const CODE_SAMPLE = `<Table hasBorder={hasBorder} isMonoHeader={isMonoHeader}>
	<tr>
		<th>Color Mode</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>Display P3</td>
		<td>Wider color space than sRGB, more vibrant colors.</td>
	</tr>
	<tr>
		<td>HSL</td>
		<td>Defines colors by hue, saturation, and lightness.</td>
	</tr>
</Table>`

const ExampleTable: FC<ExampleTableProps> = () => {
	const [hasBorder, setHasBorder] = useState<boolean>(true)
	const [isMonoHeader, setMonoHeader] = useState<boolean>(true)

	const onToggleBorder = () => setHasBorder(!hasBorder)
	const onToggleMono = () => setMonoHeader(!isMonoHeader)

	return (
		<>
			<Separator isLight={true} />
			<LiveComponent code={CODE_SAMPLE} disabledBackground={true} scope={{ hasBorder, isMonoHeader }} />
			<Separator isLight={true} />
			<Flex gap={4} isColumn={true} padding={16}>
				<Checkbox label="Has Border" isSmall={true} intent="silent" onChange={onToggleBorder} isChecked={hasBorder} />
				<Checkbox
					label="With Mono Header"
					isSmall={true}
					intent="silent"
					onChange={onToggleMono}
					isChecked={isMonoHeader}
				/>
			</Flex>
		</>
	)
}

export default ExampleTable
