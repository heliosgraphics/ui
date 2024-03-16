import { useId, type FC } from "react"
import { Flex, Icon } from "../.."
import styles from "./Select.module.css"
import { getClasses } from "@heliosgraphics/utils/classnames"
import InputLabel from "../shared/InputLabel"
import type { SelectProps } from "./Select.types"

const Select: FC<SelectProps> = ({ selectedValue, onChange, isLabelHidden, isDisabled, items, id, label }) => {
	const htmlFor: string = id || useId()

	const selectClasses: string = getClasses(styles.select, {
		[styles.selectDisabled]: isDisabled,
		[styles.selectHiddenLabel]: !label || isLabelHidden,
	})

	return (
		<Flex isColumn={true} className={selectClasses}>
			<InputLabel label={label} id={htmlFor} isHidden={isLabelHidden} isDisabled={isDisabled} />
			<Flex>
				<select className={styles.select__select} onChange={onChange} id={htmlFor} value={selectedValue}>
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

export { Select }
