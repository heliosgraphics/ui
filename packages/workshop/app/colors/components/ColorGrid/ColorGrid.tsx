import { Flex, Text, INTENTION_COLOR_MAP, INTENT_DESCRIPTIONS } from "@heliosgraphics/ui"
import Square from "./components/Square"
import type { FC, CSSProperties } from "react"
import type { ColorGridProps } from "./ColorGrid.types"

const OPACITY_SCALE: Array<number> = [97.5, 95, 90, 80, 70, 60, 50, 40, 30, 20, 10, 5]

const ColorGrid: FC<ColorGridProps> = ({ intention }) => {
	const color = INTENTION_COLOR_MAP[intention]
	const description = INTENT_DESCRIPTIONS[intention]

	const style = {
		"--color": `var(--${[color]}-hue) var(--${color}-saturation)`,
	} as CSSProperties

	return (
		<Flex style={style} isColumn={true} gap={4}>
			<Flex isColumn={true}>
				<Text type="small" className="capitalize" fontWeight="medium">
					{color}
				</Text>
				<Text type="small" emphasis="secondary">
					<span className="capitalize">{intention}</span> &middot; {description}
				</Text>
			</Flex>
			<Flex isWrapping={true} gap={2}>
				{OPACITY_SCALE.map((scale, key) => {
					return <Square key={key} lightness={scale} />
				})}
			</Flex>
		</Flex>
	)
}

export default ColorGrid
