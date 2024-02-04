import { Flex, Text } from "@heliosgraphics/ui"
import Square from "../Square"
import type { FC, CSSProperties } from "react"
import type { ColorGridProps } from "./ColorGrid.types"

const OPACITY_SCALE: Array<number> = [
	97.5, 95, 90, 80, 70, 60, 50, 40, 30, 20, 10, 5,
]

const ColorGrid: FC<ColorGridProps> = ({ color }) => {
	const style = {
		"--color": `var(--${color}-hue) var(--${color}-saturation)`,
	} as CSSProperties

	return (
		<Flex style={style} isColumn={true} gap={4}>
			<Text type="small">{color.charAt(0).toUpperCase() + color.slice(1)}</Text>
			<Flex>
				{OPACITY_SCALE.map((scale, key) => {
					return <Square key={key} color={color} lightness={scale} />
				})}
			</Flex>
		</Flex>
	)
}

export default ColorGrid
