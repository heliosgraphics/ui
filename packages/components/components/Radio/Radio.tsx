import classNames from "@sindresorhus/class-names"
import styles from "./Radio.module.css"
import Text from "../Text"
import { type FC, useId } from "react"
import type { RadioProps } from "./Radio.types"

const Radio: FC<RadioProps> = ({ id, isSmall, isDisabled, intent, onChange, value, state, label }) => {
	const radioId: string = id || useId()
	const radioClasses = classNames(styles.radio, {
		[styles.radioAdvise]: intent === "advise",
		[styles.radioAutomation]: intent === "automation",
		[styles.radioConfirmation]: intent === "confirmation",
		[styles.radioError]: intent === "error",
		[styles.radioHighlight]: intent === "highlight",
		[styles.radioQuestion]: intent === "question",
		[styles.radioSilent]: intent === "silent",
		[styles.radioSuccess]: intent === "success",
		[styles.radioWarning]: intent === "warning",
		[styles.radioDisabled]: isDisabled,
		[styles.radioSmall]: isSmall,
	})

	const radioLabelClasses = classNames(styles.radio__radioLabel, "flex flex-y-center flex-wrap gap-4")

	return (
		<div className={radioClasses}>
			<label className={radioLabelClasses} htmlFor={radioId}>
				<input
					id={radioId}
					aria-checked={state === value}
					type="radio"
					name="radio"
					onChange={onChange}
					defaultChecked={state === value}
				/>
				<div className={styles.radio__radioMark} />
				{label && (
					<Text type={isSmall ? "tiny" : "small"} fontWeight="medium" emphasis={isDisabled ? "tertiary" : "primary"}>
						{label}
					</Text>
				)}
			</label>
		</div>
	)
}

export default Radio
