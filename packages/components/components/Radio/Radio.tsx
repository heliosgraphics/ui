import classNames from "@sindresorhus/class-names"
import styles from "./Radio.module.css"
import Text from "../Text"
import type { FC } from "react"
import type { RadioProps } from "./Radio.types"

const Radio: FC<RadioProps> = ({
	isDisabled,
	onChange,
	label,
	onBlur,
	state,
	value,
}) => {
	const radioClasses = classNames(styles.radio, "flex flex-y-center", {
		"fui-radio--disabled": isDisabled,
	})

	return (
		<label className={radioClasses}>
			<input
				aria-checked={state === value}
				type="radio"
				name="radio"
				onBlur={(e) => onBlur?.(e)}
				onChange={(e) => onChange(e)}
				defaultChecked={state === value}
			/>
			<span className={styles.radio__checkmark} />
			{label && <Text type="small">{label}</Text>}
		</label>
	)
}

export default Radio
