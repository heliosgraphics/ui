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
	onChange,
	label,
}) => {
	const toggleId = getUUID(id) as string
	const toggleClasses = classNames(
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
		<div className={styles.toggle}>
			<label className={toggleClasses} htmlFor={toggleId}>
				<input
					type="checkbox"
					checked={isChecked}
					onChange={onChange}
					id={toggleId}
				/>
				<span className={styles.toggle__toggle__mark} />
				<Text type="small" fontWeight="medium">
					{label}
				</Text>
			</label>
		</div>
	)
}

export default Toggle
