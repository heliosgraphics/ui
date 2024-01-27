"use client"

import React, { useState } from "react"
import {
	Button,
	ButtonGroup,
	Separator,
	Flex,
	Text,
	type HeliosIntentionType,
} from "../../../../src"
import type { ButtonsProps } from "./Buttons.types"

const Buttons: React.FC<ButtonsProps> = () => {
	const [intent, setIntent] = useState<HeliosIntentionType>("silent")

	const onIntentAdvise = () => setIntent("advise")
	const onIntentAutomation = () => setIntent("automation")
	const onIntentConfirmation = () => setIntent("confirmation")
	const onIntentError = () => setIntent("error")
	const onIntentHighlight = () => setIntent("highlight")
	const onIntentQuestion = () => setIntent("question")
	const onIntentSilent = () => setIntent("silent")
	const onIntentSuccess = () => setIntent("success")
	const onIntentWarning = () => setIntent("warning")

	return (
		<Flex isColumn={true} gap={16}>
			<ButtonGroup>
				<Button intent="advise" value="Advise" onClick={onIntentAdvise} />
				<Button
					intent="automation"
					value="Automation"
					onClick={onIntentAutomation}
				/>
				<Button
					intent="confirmation"
					value="Confirmation"
					onClick={onIntentConfirmation}
				/>
				<Button intent="error" value="Error" onClick={onIntentError} />
				<Button
					intent="highlight"
					value="Highlight"
					onClick={onIntentHighlight}
				/>
				<Button intent="question" value="Question" onClick={onIntentQuestion} />
				<Button intent="silent" value="Silent" onClick={onIntentSilent} />
				<Button intent="success" value="Success" onClick={onIntentSuccess} />
				<Button intent="warning" value="Warning" onClick={onIntentWarning} />
			</ButtonGroup>
			<Separator />
			<ButtonGroup>
				<Button intent={intent} value="Normal" />
				<Button intent={intent} value="Tiny" size="tiny" />
				<Button intent={intent} value="Small" size="small" />
				<Button intent={intent} value="Loading" isLoading={true} />
				<Button intent={intent} value="Disabled" isDisabled={true} />
				<Button
					intent={intent}
					value="Both"
					isLoading={true}
					isDisabled={true}
				/>
				<Button intent={intent} value="Icon" icon="pin" />
				<Button
					intent={intent}
					value="Icon Only"
					icon="pin"
					isIconOnly={true}
				/>
				<Button
					intent={intent}
					value="Icon Only Loading"
					icon="pin"
					isIconOnly={true}
					isLoading={true}
				/>
				<Button
					intent={intent}
					value="Icon Only Small"
					icon="pin"
					size="small"
					isIconOnly={true}
				/>
				<Button intent={intent} value="Icon Small" icon="pin" size="small" />
				<Button
					intent={intent}
					value="Icon Only Loading Small"
					icon="pin"
					size="small"
					isIconOnly={true}
					isLoading={true}
				/>
				<Button
					intent={intent}
					value="Icon Only Tiny"
					icon="pin"
					size="tiny"
					isIconOnly={true}
				/>
				<Button intent={intent} value="Icon Tiny" icon="pin" size="tiny" />
				<Button
					intent={intent}
					value="Icon Only Loading Tiny"
					icon="pin"
					size="tiny"
					isLoading={true}
					isIconOnly={true}
				/>
				<Button intent={intent} value="Rounded" isRounded={true} />
				<Button
					intent={intent}
					value="Rounded Icon"
					icon="bullseye"
					isRounded={true}
				/>
				<Button
					intent={intent}
					value="Round Tiny"
					isRounded={true}
					size="tiny"
				/>
				<Button
					intent={intent}
					value="Round Tiny Icon"
					isRounded={true}
					size="tiny"
					icon="bullseye"
				/>
				<Button
					intent={intent}
					value="Round Small"
					isRounded={true}
					size="small"
				/>
				<Button
					intent={intent}
					value="Round Small Icon"
					isRounded={true}
					size="small"
					icon="bullseye"
				/>
			</ButtonGroup>
		</Flex>
	)
}

export default Buttons
