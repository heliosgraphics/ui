import { useId } from "react"
import { getClasses } from "@heliosgraphics/utils/classnames"
import Text from "../Text"
import styles from "./Toggle.module.css"
import type { FC } from "react"
import type { ToggleProps } from "./Toggle.types"

const Toggle: FC<ToggleProps> = ({ id, isChecked, isSmall, isRequired, isDisabled, intent, onChange, label }) => {
	const toggleId: string = id || useId()
	const toggleClasses = getClasses(styles.toggle, {
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

	const toggleLabelClasses = getClasses(styles.toggle__toggleLabel, "flex flex-y-center gap-2 flex-wrap")

	return (
		<div className={toggleClasses}>
			<label className={toggleLabelClasses} htmlFor={toggleId}>
				<input
					type="checkbox"
					checked={isChecked}
					onChange={onChange}
					required={isRequired}
					disabled={isDisabled}
					id={toggleId}
				/>
				<span className={styles.toggle__toggleMark} />
				<Text type={isSmall ? "tiny" : "small"} fontWeight="medium" emphasis={isDisabled ? "tertiary" : "primary"}>
					{label}
				</Text>
			</label>
		</div>
	)
}

export default Toggle
