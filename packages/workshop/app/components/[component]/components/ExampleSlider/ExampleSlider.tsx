"use client"

import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import type { ExampleSliderProps } from "./ExampleSlider.types"
import type { FC } from "react"

const CODE_SAMPLE = `<Slider />`

const ExampleSlider: FC<ExampleSliderProps> = () => {
	return (
		<>
			<LiveComponent code={CODE_SAMPLE} />
		</>
	)
}

export default ExampleSlider
