"use client"

import { useState } from "react"
import {
	Flex,
	Button,
	ButtonGroup,
	Text,
	Dialog as DialogComponent,
} from "@heliosgraphics/ui"
import type { DialogProps } from "./Dialog.types"
import type { FC } from "react"

const Dialog: FC<DialogProps> = () => {
	const [hasDialog, setDialog] = useState<boolean>(false)
	const onDialogToggle = () => setDialog(!hasDialog)

	return (
		<Flex>
			<ButtonGroup>
				<Button value="Toggle" intent="silent" onClick={onDialogToggle} />
			</ButtonGroup>
			<DialogComponent onClose={onDialogToggle} title="Dialog">
				<Text type="paragraph">Hello</Text>
			</DialogComponent>
		</Flex>
	)
}

export default Dialog
