import { useId } from "react"
import classNames from "@sindresorhus/class-names"
import Text from "../Text"
import styles from "./Toggle.module.css"
import type { FC } from "react"
import type { ToggleProps } from "./Toggle.types"

const Toggle: FC<ToggleProps> = ({
	id,
	isChecked,
	isSmall,
	isDisabled,
	intent,
	onChange,
	label,
}) => {
	const toggleId: string = id || useId()
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
		[styles.toggleDisabled]: isDisabled,
		[styles.toggleSmall]: isSmall,
	})

	const toggleLabelClasses = classNames(
		styles.toggle__toggleLabel,
		"flex flex-y-center gap-2 flex-wrap",
	)

	return (
		<div className={toggleClasses}>
			<label className={toggleLabelClasses} htmlFor={toggleId}>
				<input
					type="checkbox"
					checked={isChecked}
					onChange={onChange}
					disabled={isDisabled}
					id={toggleId}
				/>
				<span className={styles.toggle__toggleMark} />
				<Text
					type={isSmall ? "tiny" : "small"}
					fontWeight="medium"
					emphasis={isDisabled ? "tertiary" : "primary"}
				>
					{label}
				</Text>
			</label>
		</div>
	)
}

export default Toggle
