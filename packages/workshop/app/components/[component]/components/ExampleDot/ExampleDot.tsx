"use client"

import { Flex, Dot, Text, SCALE, Separator } from "@heliosgraphics/ui"
import { useContext, type FC } from "react"
import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import { WorkshopContext } from "workshop/app/contexts/WorkshopContext"
import type { ExampleDotProps } from "./ExampleDot.types"

const CODE_SAMPLE = `<Dot size={24} color={color} />`

const ExampleDot: FC<ExampleDotProps> = () => {
	const { color, colorAccent } = useContext(WorkshopContext)

	return (
		<>
			<LiveComponent code={CODE_SAMPLE} />
			<Separator isLight={true} />
			<Flex gap={16} isWrapping={true} padding={16}>
				<Flex gap={8} isWrapping={true}>
					{(SCALE as Array<number>).map((scale: number, key: number) => {
						return (
							<Flex key={key} gap={4} isColumn={true}>
								<Text type="tiny" fontFamily="mono">
									{scale}
								</Text>
								<Flex gap={4}>
									<Dot size={scale} color={color} />
									<Dot size={scale} color={color} colorAccent={colorAccent} />
								</Flex>
							</Flex>
						)
					})}
				</Flex>
			</Flex>
		</>
	)
}

export default ExampleDot
