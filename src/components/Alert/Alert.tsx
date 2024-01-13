import React from "react"
import Button from "../Button/Button"
import ButtonGroup from "../ButtonGroup"
import classNames from "@sindresorhus/class-names"
import Flex from "../Flex/Flex"
import Icon from "../Icon/Icon"
import styles from "./Alert.module.css"
import Text from "../Text/Text"
import type { AlertProps } from "./Alert.types"

const Alert: React.FC<AlertProps> = ({
	children,
	onClose,
	title,
	icon,
	intent,
}) => {
	const alertClasses: string = classNames(styles.alert, {
		[styles.alertAdvise]: intent === "advise",
		[styles.alertConfirmation]: intent === "confirmation",
		[styles.alertError]: intent === "error",
		[styles.alertHighlight]: intent === "highlight",
		[styles.alertQuestion]: intent === "question",
		[styles.alertSuccess]: intent === "success",
		[styles.alertWarning]: intent === "warning",
		[styles.alertSmall]: !title,
		[styles.alertNormal]: title,
		[styles.alertWithButton]: !!onClose,
	})

	return (
		<div className={styles.alertBox}>
			{!!onClose && (
				<ButtonGroup className={styles.alertButtonGroup}>
					<Button
						isIconOnly={true}
						value="Close"
						intent="silent"
						size="tiny"
						icon="x"
					/>
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
