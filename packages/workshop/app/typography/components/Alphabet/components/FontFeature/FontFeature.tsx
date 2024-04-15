import { Flex, Pill, Tile, Text } from "@heliosgraphics/ui"
import type { FontFeatureProps } from "./FontFeature.types"
// import styles from './FontFeature.module.css'
import type { FC } from "react"

export const FontFeature: FC<FontFeatureProps> = ({ name, description }) => {
	return (
		<Flex gap={2} isYCentered={true}>
			<Pill size="small" label={name} color="gray" />
			<Text type="tiny" emphasis="secondary">
				{description}
			</Text>
		</Flex>
	)
}
