import Button from "../Button/Button"
import ButtonGroup from "../ButtonGroup"
import { getClasses } from "@heliosgraphics/utils/classnames"
import Flex from "../Flex/Flex"
import Icon from "../Icon/Icon"
import styles from "./Alert.module.css"
import Text from "../Text/Text"
import type { AlertProps } from "./Alert.types"
import type { FC } from "react"

const Alert: FC<AlertProps> = ({ children, onClose, title, icon, intent }) => {
	const alertClasses: string = getClasses(styles.alert, {
		[styles.alertAdvise]: intent === "advise",
		[styles.alertAutomation]: intent === "automation",
		[styles.alertConfirmation]: intent === "confirmation",
		[styles.alertError]: intent === "error",
		[styles.alertHighlight]: intent === "highlight",
		[styles.alertQuestion]: intent === "question",
		[styles.alertSilent]: intent === "silent",
		[styles.alertSuccess]: intent === "success",
		[styles.alertWarning]: intent === "warning",
		[styles.alertSmall]: !title,
		[styles.alertNormal]: title,
		[styles.alertWithButton]: !!onClose,
	})

	return (
		<div className="relative">
			{!!onClose && (
				<ButtonGroup className={styles.alertButtonGroup}>
					<Button isIconOnly={true} value="Close" intent={intent} size="tiny" icon="x" onClick={onClose} />
				</ButtonGroup>
			)}
			<Flex className={alertClasses} padding={6} gap={6}>
				{!!icon && <Icon name={icon} size={20} />}
				<Flex isColumn={true} isXCentered={true}>
					{!!title && (
						<Text type="div" fontWeight="semibold">
							{title}
						</Text>
					)}
					<Text type="small">{children}</Text>
				</Flex>
			</Flex>
		</div>
	)
}

export default Alert
