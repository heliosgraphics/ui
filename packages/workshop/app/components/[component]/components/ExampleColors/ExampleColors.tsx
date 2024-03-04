import { Flex } from "@heliosgraphics/ui"
import ColorGrid from "./components/ColorGrid"
import type { ExampleColorsProps } from "./ExampleColors.types"
import type { FC } from "react"

const ExampleColors: FC<ExampleColorsProps> = () => {
	return (
		<Flex isColumn={true} gap={8}>
			<ColorGrid color="aqua" />
			<ColorGrid color="blue" />
			<ColorGrid color="gray" />
			<ColorGrid color="green" />
			<ColorGrid color="orange" />
			<ColorGrid color="pink" />
			<ColorGrid color="purple" />
			<ColorGrid color="red" />
			<ColorGrid color="yellow" />
		</Flex>
	)
}

export default ExampleColors
