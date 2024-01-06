import * as React from "react"
import { CheckboxProps } from "./Checkbox.types"
import classNames from "@sindresorhus/class-names"
import Text from "../Text"
import Icon from "../Icon"
import Flex from "../Flex"
import { getUUID } from "@heliosgraphics/utils/uuid"
import styles from "./Checkbox.module.css"

const Checkbox: React.FC<CheckboxProps> = ({
	isLabelHidden,
	onChange,
	name,
	label,
	isChecked,
	isDisabled,
	isRequired,
	description,
	id,
}) => {
	const localName: string = getUUID(name)
	const localId: string = getUUID(!!id ? `${id}-label` : undefined)

	const checkboxClasses: string = classNames(styles.checkbox__checkbox, {
		[styles.checkbox__checkboxChecked]: isChecked,
		[styles.checkbox__checkboxUnchecked]: !isChecked,
		[styles.checkbox__checkboxDisabled]: isDisabled,
	})

	const onToggle = (event: React.ChangeEvent<HTMLInputElement>) =>
		onChange?.(event)

	return (
		<div
			className={styles.checkbox}
			role="checkbox"
			aria-checked={isChecked}
			aria-labelledby={id}
		>
			<label aria-label={label} htmlFor={id} className={checkboxClasses}>
				<input
					name={localName}
					id={localId}
					type="checkbox"
					required={!!isRequired}
					defaultChecked={isChecked ? true : false}
					tabIndex={0}
					onChange={onToggle}
				/>
				<Flex className={styles.checkbox__checkbox__checkIcon} padding={1}>
					<Icon name="check" size={16} />
				</Flex>
				{!isLabelHidden && (
					<Flex isColumn={true} className="unselectable">
						<Text type="small" fontWeight="semibold">
							{label}
						</Text>
						{!!description && <Text type="small">{description}</Text>}
					</Flex>
				)}
			</label>
		</div>
	)
}

export default Checkbox
