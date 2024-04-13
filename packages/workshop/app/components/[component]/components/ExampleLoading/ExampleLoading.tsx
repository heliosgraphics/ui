"use client"

import { useState, type FC } from "react"
import { Text, Flex, Select, Loading, EMPHASES, type HeliosEmphasisType } from "@heliosgraphics/ui"
import type { ExampleLoadingProps } from "./ExampleLoading.types"

const ExampleLoading: FC<ExampleLoadingProps> = () => {
	const [emphasis, setEmphasis] = useState<HeliosEmphasisType>("secondary")

	const items = EMPHASES.map((emphasis) => {
		return { name: emphasis, value: emphasis, isDisabled: emphasis === "primary" }
	})

	const onEmphasisChange = (event: any) => setEmphasis(event.target.value)

	return (
		<Flex gap={8} isColumn={true}>
			<Select label="Select Emphasis" items={items} onChange={onEmphasisChange} selectedValue={emphasis} />
			<Flex gap={8}>
				<Text type="div" emphasis={emphasis}>
					<Loading size={10} />
				</Text>
				<Text type="div" emphasis={emphasis}>
					<Loading size={20} />
				</Text>
				<Text type="div" emphasis={emphasis}>
					<Loading size={40} />
				</Text>
			</Flex>
		</Flex>
	)
}

export default ExampleLoading
