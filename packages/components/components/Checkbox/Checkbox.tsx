import { useId } from "react"
import { getClasses } from "@heliosgraphics/utils/classnames"
import { Icon, Text } from "../.."
import styles from "./Checkbox.module.css"
import type { FC } from "react"
import type { CheckboxProps } from "./Checkbox.types"

const Checkbox: FC<CheckboxProps> = ({
	id,
	isChecked,
	isLabelHidden = false,
	isSmall,
	isDisabled,
	intent,
	onChange,
	label,
}) => {
	const checkboxId: string = id || useId()
	const checkboxClasses = getClasses(styles.checkbox, {
		[styles.checkboxAdvise]: intent === "advise",
		[styles.checkboxAutomation]: intent === "automation",
		[styles.checkboxConfirmation]: intent === "confirmation",
		[styles.checkboxDanger]: intent === "danger",
		[styles.checkboxHighlight]: intent === "highlight",
		[styles.checkboxQuestion]: intent === "question",
		[styles.checkboxSilent]: intent === "silent",
		[styles.checkboxSuccess]: intent === "success",
		[styles.checkboxWarning]: intent === "warning",
		[styles.checkboxDisabled]: isDisabled,
		[styles.checkboxSmall]: isSmall,
	})

	const checkboxLabelClasses = getClasses(styles.checkbox__checkboxLabel, "flex flex-y-center flex-wrap gap-4")

	return (
		<div className={checkboxClasses}>
			<label className={checkboxLabelClasses} htmlFor={checkboxId}>
				<input type="checkbox" checked={isChecked} onChange={onChange} disabled={isDisabled} id={checkboxId} />
				<span className={styles.checkbox__checkboxMark} />
				<Icon icon="check" size={isSmall ? 14 : 18} className={styles.checkbox__checkboxIcon} />
				{!isLabelHidden && (
					<Text type={isSmall ? "tiny" : "small"} fontWeight="medium" emphasis={isDisabled ? "tertiary" : "primary"}>
						{label}
					</Text>
				)}
			</label>
		</div>
	)
}

export { Checkbox }
