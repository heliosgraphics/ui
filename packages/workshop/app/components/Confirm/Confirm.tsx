"use client"

import { useState, type FC } from "react"
import {
	Flex,
	Button,
	ButtonGroup,
	Text,
	Confirm as ConfirmComponent,
} from "../../../../src"
import type { ConfirmProps } from "./Confirm.types"

const Confirm: FC<ConfirmProps> = () => {
	const [isConfirming, setConfirming] = useState<boolean>(false)
	const onConfirmToggle = () => setConfirming(!isConfirming)

	return (
		<Flex>
			<ButtonGroup>
				<Button value="Toggle" intent="silent" onClick={onConfirmToggle} />
			</ButtonGroup>
			<ConfirmComponent
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

export default Confirm
