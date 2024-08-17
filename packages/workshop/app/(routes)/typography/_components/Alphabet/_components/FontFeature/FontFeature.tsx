import { Flex, Pill, Text } from "@heliosgraphics/ui"
import type { FontFeatureProps } from "./FontFeature.types"
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
