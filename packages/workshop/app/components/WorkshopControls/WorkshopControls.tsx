import { Flex } from "@heliosgraphics/ui"
import ColorSelector from "./components/ColorSelector"
import IconSelector from "./components/IconSelector"
import IntentSelector from "./components/IntentSelector"
import type { FC } from "react"
import styles from "./WorkshopControls.module.css"
import type { WorkshopControlsProps } from "./WorkshopControls.types"

const WorkshopControls: FC<WorkshopControlsProps> = () => {
	return (
		<Flex gap={4} isWrapping={true} className={styles.workshopControls}>
			<IntentSelector />
			<ColorSelector />
			<IconSelector />
		</Flex>
	)
}

export default WorkshopControls
