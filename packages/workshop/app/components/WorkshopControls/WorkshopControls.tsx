import { Flex } from "@heliosgraphics/ui"
import ColorSelector from "./components/ColorSelector"
import IconSelector from "./components/IconSelector"
import IntentSelector from "./components/IntentSelector"
import type { FC } from "react"
import type { WorkshopControlsProps } from "./WorkshopControls.types"

const WorkshopControls: FC<WorkshopControlsProps> = () => {
	return null

	return (
		<Flex gap={4} isWrapping={true}>
			<IntentSelector />
			<ColorSelector />
			<IconSelector />
		</Flex>
	)
}

export default WorkshopControls
