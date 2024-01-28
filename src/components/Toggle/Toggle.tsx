import React from "react"
import { getUUID } from "@heliosgraphics/utils/uuid"
import classNames from "@sindresorhus/class-names"
import Text from "../Text"
import styles from "./Toggle.module.css"
import type { ToggleProps } from "./Toggle.types"

const Toggle: React.FC<ToggleProps> = ({
	id,
	isChecked,
	isSmall,
	isDisabled,
	intent,
	onChange,
	label,
}) => {
	const toggleId: string = getUUID(id)

	const toggleClasses = classNames(styles.toggle, {
		[styles.toggleAdvise]: intent === "advise",
		[styles.toggleAutomation]: intent === "automation",
		[styles.toggleConfirmation]: intent === "confirmation",
		[styles.toggleError]: intent === "error",
		[styles.toggleHighlight]: intent === "highlight",
		[styles.toggleQuestion]: intent === "question",
		[styles.toggleSilent]: intent === "silent",
		[styles.toggleSuccess]: intent === "success",
		[styles.toggleWarning]: intent === "warning",
	})

	const toggleLabelClasses = classNames(
		styles.toggle__toggle,
		"flex flex-y-center",
		{
			"--checked": !!isChecked,
			"--unchecked": !isChecked,
			[styles.toggle__toggleDisabled]: isDisabled,
			"--small": isSmall,
		},
	)

	return (
		<div className={toggleClasses}>
			<label className={toggleLabelClasses} htmlFor={toggleId}>
				<input
					type="checkbox"
					checked={isChecked}
					onChange={onChange}
					id={toggleId}
				/>
				<span className={styles.toggle__toggleMark} />
				<Text type="small" fontWeight="medium">
					{label}
				</Text>
			</label>
		</div>
	)
}

export default Toggle
