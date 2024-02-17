"use client"

import { Flex, Dot, Select, Text, SCALE, COLORS, HeliosColors } from "@heliosgraphics/ui"
import { useState, useContext, type FC } from "react"
import { WorkshopContext } from "../../contexts/WorkshopContext"
import type { ExampleDotProps } from "./ExampleDot.types"

const ExampleDot: FC<ExampleDotProps> = () => {
	const { color } = useContext(WorkshopContext)
	const [colorAccent, setColorAccent] = useState<HeliosColors>("orange")

	const items = COLORS.map((color) => {
		return { name: color, value: color }
	})

	const onColorChange = (event) => setColorAccent(event.target.value)

	return (
		<Flex gap={16} isWrapping={true}>
			<Select label="Color" isLabelHidden={true} items={items} onChange={onColorChange} selectedValue={colorAccent} />
			<Flex gap={4} isWrapping={true}>
				{SCALE.map((scale, key) => {
					return (
						<Flex key={key} gap={4}>
							<Text type="tiny" fontFamily="mono">
								{scale}
							</Text>
							<Dot size={scale} color={color} />
							<Dot size={scale} color={color} colorAccent={colorAccent} />
						</Flex>
					)
				})}
			</Flex>
		</Flex>
	)
}

export default ExampleDot
