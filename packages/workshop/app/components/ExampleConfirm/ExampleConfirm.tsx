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
				cancelText="Cancel"
				confirmText="Delete"
				description="Are you sure you want to delete this?"
				icon="trash"
				intent="error"
				isOpen={isConfirming}
				onCancel={onConfirmToggle}
				onConfirm={onConfirmToggle}
				title="Confirm Delete"
			/>
		</Flex>
	)
}

export default ExampleConfirm
