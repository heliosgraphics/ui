import Alert from "../Alert"
import classNames from "@sindresorhus/class-names"
import Flex from "../Flex"
import Separator from "../Separator"
import styles from "./Form.module.css"
import type { FC } from "react"
import type { FormProps } from "./Form.types"

const Form: FC<FormProps> = ({
	alert,
	buttonGroup,
	children,
	alertType,
	className,
	onSubmit,
}) => {
	const formClasses: string = classNames(
		styles.form,
		"flex gap-8 flex-column",
		className,
	)

	return (
		<form onSubmit={onSubmit} className={formClasses}>
			<Flex isColumn={true} gap={8}>
				{children}
			</Flex>
			{(!!alert || !!buttonGroup) && <Separator isLight={true} />}
			{!!alert && (
				<Alert intent={alertType || "error"} icon="bolt">
					{alert}
				</Alert>
			)}
			{!!buttonGroup && buttonGroup}
		</form>
	)
}

export default Form
