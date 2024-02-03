import { useId, useMemo } from "react"
import Flex from "../Flex"
import Icon from "../Icon"
import styles from "./Select.module.css"
import classNames from "@sindresorhus/class-names"
import type { SelectProps } from "./Select.types"

const Select: React.FC<SelectProps> = ({
	selectedValue,
	onChange,
	isLabelHidden,
	isDisabled,
	items,
	id,
	label,
}) => {
	const htmlFor: string = id || useId()
	const selectClasses: string = classNames(styles.select, {
		[styles.selectDisabled]: isDisabled,
	})

	return (
		<Flex isColumn={true} gap={2} className={selectClasses}>
			{label && !isLabelHidden && (
				<label className="small gray-500" htmlFor={htmlFor}>
					{label}
				</label>
			)}
			<Flex>
				<select
					className={styles.select__select}
					onChange={onChange}
					id={htmlFor}
					value={selectedValue}
				>
					{items?.map((item, key) => {
						return (
							<option key={key} value={item.value} disabled={item.isDisabled}>
								{item.name}
							</option>
						)
					})}
				</select>
				<Flex className={styles.select__icon} isCentered={true}>
					<Icon name="chevron-down" size={20} />
				</Flex>
			</Flex>
		</Flex>
	)
}

export default Select
