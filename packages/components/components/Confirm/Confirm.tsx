import Button from "../Button"
import ButtonGroup from "../ButtonGroup"
import Dialog from "../Dialog"
import Flex from "../Flex"
import Text from "../Text"
import type { ConfirmProps } from "./Confirm.types"
import type { FC } from "react"

const Confirm: FC<ConfirmProps> = ({
	onCancel,
	onConfirm,
	isOpen,
	title,
	intent,
	description,
	cancelIcon,
	cancelText,
	confirmIcon,
	confirmText,
}) => {
	const onCancelClick = (event) => onCancel(event)
	const onConfirmClick = (event): void => {
		onCancel(event)
		onConfirm(event)

		return void 0
	}

	return (
		<Dialog title={title} onClose={onCancel} isOpen={isOpen} isCentered={true}>
			<Flex gap={12} isColumn={true}>
				{!!description && <Text type="paragraph">{description}</Text>}
				<ButtonGroup>
					<Button
						intent="silent"
						value={cancelText}
						onClick={onCancelClick}
						icon={cancelIcon}
					/>
					<Button
						intent={intent}
						value={confirmText}
						onClick={onConfirmClick}
						icon={confirmIcon}
					/>
				</ButtonGroup>
			</Flex>
		</Dialog>
	)
}

export default Confirm
