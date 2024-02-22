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
	icon,
	cancelText,
	confirmText,
}) => {
	return (
		<Dialog title={title} onClose={onCancel} isOpen={isOpen} isCentered={true}>
			<Flex gap={12} isColumn={true}>
				{!!description && <Text type="paragraph">{description}</Text>}
				<ButtonGroup>
					<Button intent={intent} value={confirmText} onClick={onConfirm} icon={icon} />
					<Button intent="silent" value={cancelText} onClick={onCancel} />
				</ButtonGroup>
			</Flex>
		</Dialog>
	)
}

export default Confirm
