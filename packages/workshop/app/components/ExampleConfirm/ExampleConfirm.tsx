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
				intent="error"
				title="Confirm Delete"
				description="Are you sure you want to do this?"
				confirmText="Confirm"
				cancelText="Cancel"
				onConfirm={onConfirmToggle}
			/>
		</Flex>
	)
}

export default ExampleConfirm
