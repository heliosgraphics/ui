"use client"

import { useState, type FC } from "react"
import type { ExampleOverlayProps } from "./ExampleOverlay.types"
import LiveComponent from "../LiveComponent"

const SAMPLE_CODE = `<>
	<ButtonGroup>
		<Button onClick={onOpenToggle} value="Toggle" intent={intent} icon={icon}/>
	</ButtonGroup>
	<Overlay isVisible={isOpen} onClose={onOpenToggle}>
		<Flex withBackground={true} padding={16} withRadius="small">
			<Text type='small'>Might not need this</Text>
		</Flex>
	</Overlay>
</>`

const ExampleOverlay: FC<ExampleOverlayProps> = () => {
	const [isOpen, setOpen] = useState<boolean>(false)

	const onOpenToggle = () => setOpen(!isOpen)

	return <LiveComponent code={SAMPLE_CODE} scope={{ isOpen, onOpenToggle }} />
}

export default ExampleOverlay
