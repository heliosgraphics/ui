"use client"

import { Alert, Flex, Slider } from "@heliosgraphics/ui"
import type { FC } from "react"
import type { ExampleSliderProps } from "./ExampleSlider.types"

const ExampleSlider: FC<ExampleSliderProps> = () => {
	return (
		<Flex isColumn={true}>
			<Alert intent="silent" icon="info">
				WIP
			</Alert>
			<Slider />
		</Flex>
	)
}

export default ExampleSlider
