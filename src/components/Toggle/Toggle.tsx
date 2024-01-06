import React from "react"
import classNames from "@sindresorhus/class-names"
import Text from "../Text"
import { getUUID } from "@heliosgraphics/utils/uuid"
import styles from "./Toggle.module.css"
import type { ToggleProps } from "./Toggle.types"

const Toggle: React.FC<ToggleProps> = ({
	id,
	isChecked,
	isDisabled,
	onChange,
	label,
}) => {
	const toggleId: string = getUUID(id)
	const toggleClasses = classNames(
		styles.toggle__toggle,
		"flex flex-y-center",
		{
			// "--checked": !!isChecked,
			// "--unchecked": !isChecked,
			[styles.toggle__toggleDisabled]: isDisabled,
			// "--small": isSmall,
		},
	)

	const onToggle = (event: React.ChangeEvent) => {
		onChange(event)
	}

	return (
		<div className={styles.toggle}>
			<label className={toggleClasses} htmlFor={toggleId}>
				<input
					type="checkbox"
					checked={isChecked}
					onChange={onToggle}
					id={toggleId}
				/>
				<span className={styles.toggle__toggle__mark} />
				<Text type="small" color="dark-gray" fontWeight="medium">
					{label}
				</Text>
			</label>
		</div>
	)
}

export default Toggle
