"use client"

import { Flex, Text, Donut, Separator, ButtonGroup, Button } from "@heliosgraphics/ui"
import { useContext, useState, type FC } from "react"
import { WorkshopContext } from "workshop/app/_contexts/WorkshopContext"

export const ExampleDonut: FC = () => {
	const { color, colorAccent } = useContext(WorkshopContext)
	const [percentage, setPercentage] = useState<number>(64)

	const onRandomPercentage = () => {
		const randomPercentage: number = Math.floor(Math.random() * 100)

		return setPercentage(randomPercentage)
	}

	return (
		<>
			<Separator isLight={true} />
			<Flex gap={8} isWrapping={true} padding={16}>
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
					<Donut size={64} percentage={percentage / 2} color={colorAccent}>
						<Flex isColumn={true} gap={1} style={{ minWidth: "24px" }}>
							<Text type="tiny" fontFamily="mono" emphasis="secondary" textAlign="center">
								{percentage}
							</Text>
							<Separator isLight={true} />
							<Text type="tiny" fontFamily="mono" emphasis="secondary" textAlign="center">
								{percentage / 2}
							</Text>
						</Flex>
					</Donut>
				</Donut>
				<Separator isLight={true} />
				<ButtonGroup>
					<Button intent="silent" value="Random Percentage" onClick={onRandomPercentage} size="small" />
				</ButtonGroup>
			</Flex>
		</>
	)
}
