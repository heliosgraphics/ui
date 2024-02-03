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
	details,
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
			<Flex gap={8} isColumn={true}>
				<ButtonGroup>
					<Button
						intent="silent"
						value={cancelText}
						onClick={onCancelClick}
						icon={cancelIcon}
					/>
					<Button
						intent="error"
						value={confirmText}
						onClick={onConfirmClick}
						icon={confirmIcon}
					/>
				</ButtonGroup>
				{!!details && (
					<Text type="tiny" color="gray">
						{details}
					</Text>
				)}
			</Flex>
		</Dialog>
	)
}

export default Confirm
