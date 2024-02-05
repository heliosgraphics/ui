"use client"

import {
	Flex,
	Text,
	Donut,
	Separator,
	ButtonGroup,
	Button,
} from "@heliosgraphics/ui"
import { useContext, useState, type FC } from "react"
import { ColorContext } from "../../contexts/ColorContext"
import type { ExampleDonutProps } from "./ExampleDonut.types"

const ExampleDonut: FC<ExampleDonutProps> = () => {
	const { color } = useContext(ColorContext)
	const [percentage, setPercentage] = useState<number>(64)

	const onRandomPercentage = () => {
		const randomPercentage: number = Math.floor(Math.random() * 100)

		return setPercentage(randomPercentage)
	}

	return (
		<Flex gap={16} isWrapping={true}>
			<ButtonGroup>
				<Button
					intent="silent"
					value="Random Percentage"
					onClick={onRandomPercentage}
				/>
			</ButtonGroup>
			<Separator />
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
