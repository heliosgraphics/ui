"use client"

import { Flex, Button, ButtonGroup, Confirm } from "@heliosgraphics/ui"
import { useState, type FC } from "react"
import type { ExampleConfirmProps } from "./ExampleConfirm.types"

const ExampleConfirm: FC<ExampleConfirmProps> = () => {
	const [isConfirming, setConfirming] = useState<boolean>(false)
	const onConfirmToggle = () => setConfirming(!isConfirming)

	return (
		<Flex>
			<ButtonGroup>
				<Button value="Toggle" intent="silent" onClick={onConfirmToggle} />
			</ButtonGroup>
			<Confirm
				isOpen={isConfirming}
				onCancel={onConfirmToggle}
				title="Confirm"
				confirmText="Confirm"
				cancelText="Cancel"
				onConfirm={onConfirmToggle}
			/>
		</Flex>
	)
}

export default ExampleConfirm
