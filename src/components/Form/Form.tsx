import React from "react"
import styles from "./Form.module.css"
import Alert from "../Alert"
import Flex from "../Flex"
import Separator from "../Separator"
import classNames from "@sindresorhus/class-names"
import type { FormProps } from "./Form.types"

const Form: React.FC<FormProps> = ({
	alert,
	buttonGroup,
	children,
	alertType,
	className,
	onSubmit,
}) => {
	const formClasses: string = classNames(
		styles.form,
		"flex flex-gap-8 flex-column",
		className,
	)

	return (
		<form onSubmit={onSubmit} className={formClasses}>
			<Flex isColumn={true} gap={8}>
				{children}
			</Flex>
			{(!!alert || !!buttonGroup) && <Separator isLight={true} />}
			{!!alert && (
				<Alert type={alertType || "error"} icon="bolt">
					{alert}
				</Alert>
			)}
			{!!buttonGroup && buttonGroup}
		</form>
	)
}

export default Form
