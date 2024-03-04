"use client"

import { Flex, Text, Donut, Separator, ButtonGroup, Button } from "@heliosgraphics/ui"
import { useContext, useState, type FC } from "react"
import { WorkshopContext } from "workshop/app/contexts/WorkshopContext"
import type { ExampleDonutProps } from "./ExampleDonut.types"

const ExampleDonut: FC<ExampleDonutProps> = () => {
	const { color } = useContext(WorkshopContext)
	const [percentage, setPercentage] = useState<number>(64)

	const onRandomPercentage = () => {
		const randomPercentage: number = Math.floor(Math.random() * 100)

		return setPercentage(randomPercentage)
	}

	return (
		<Flex gap={8} isWrapping={true}>
			<ButtonGroup>
				<Button intent="silent" value="Random Percentage" onClick={onRandomPercentage} />
			</ButtonGroup>
			<Separator isLight={true} />
			<Donut size={32} percentage={percentage} color={color}></Donut>
			<Donut size={48} percentage={percentage} color={color}>
				<Text type="tiny" fontFamily="mono" emphasis="secondary">
					{percentage}
				</Text>
			</Donut>
			<Donut size={64} percentage={percentage} color={color}>
				<Text type="small" fontFamily="mono" emphasis="secondary">
					{percentage}
				</Text>
			</Donut>
			<Donut size={96} percentage={percentage} color={color}>
				<Text type="div" fontFamily="mono" emphasis="secondary">
					{percentage}
				</Text>
			</Donut>
			<Donut size={128} percentage={percentage} color={color} />
		</Flex>
	)
}

export default ExampleDonut
