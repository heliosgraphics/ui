"use client"

import { useId, type FC } from "react"
import Flex from "../Flex"
import Text from "../Text"
import ResultList from "../ResultList"
import Loading from "../Loading"
import styles from "./Input.module.css"
import classNames from "@sindresorhus/class-names"
import type { InputProps } from "./Input.types"

const Input: FC<InputProps> = ({
	helperText,
	isDisabled,
	isLoading,
	isRequired,
	label,
	onBlur,
	onChange,
	onFocus,
	placeholder,
	results,
	showResults,
	value,
}) => {
	const htmlFor: string = useId()
	const inputClasses: string = classNames(styles.input, "relative flex flex-column", {
		[styles.inputDisabled]: isDisabled,
	})

	const hasResults: boolean = !!results?.length && showResults

	return (
		<div className={inputClasses}>
			{label && <label htmlFor={htmlFor}>{label}</label>}
			<Flex className="grow-1">
				<input
					className={styles.input__input}
					disabled={isDisabled}
					id={htmlFor}
					onBlur={onBlur}
					onChange={onChange}
					onFocus={onFocus}
					placeholder={placeholder}
					required={isRequired}
					defaultValue={value}
				/>
				{isLoading && (
					<div className={styles.input__loading}>
						<Loading size={20} />
					</div>
				)}
			</Flex>
			{hasResults && (
				<div className={styles.input__results}>
					<ResultList items={results} />
				</div>
			)}
			{!!helperText && (
				<Text type="tiny" emphasis="tertiary" className={styles.input__helper}>
					{helperText}
				</Text>
			)}
		</div>
	)
}

export default Input
