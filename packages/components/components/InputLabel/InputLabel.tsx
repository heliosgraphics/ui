import { useId, type FC } from "react"
import styles from "./InputLabel.module.css"
import classNames from "@sindresorhus/class-names"
import type { InputLabelProps } from "./InputLabel.types"

const InputLabel: FC<InputLabelProps> = ({ id, label, isDisabled, isHidden }) => {
	const htmlFor: string = id || useId()

	if (isHidden || !label) return null

	const inputLabelClasses: string = classNames(styles.inputLabel, {
		[styles.inputLabelDisabled]: isDisabled,
	})

	return (
		<label className={inputLabelClasses} htmlFor={htmlFor}>
			{label}
		</label>
	)
}

export default InputLabel
