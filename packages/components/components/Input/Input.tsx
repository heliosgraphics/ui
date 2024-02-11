"use client"

import { useId, type FC } from "react"
import classNames from "@sindresorhus/class-names"
import Flex from "../Flex"
import InputLabel from "../InputLabel"
import Loading from "../Loading"
import ResultList from "../ResultList"
import styles from "./Input.module.css"
import Text from "../Text"
import type { InputProps } from "./Input.types"

const Input: FC<InputProps> = ({
	helperText,
	isDisabled,
	isLabelHidden,
	isLoading,
	isRequired,
	label,
	onBlur,
	onChange,
	onFocus,
	placeholder,
	results,
	showResults,
	type = "text",
	value,
}) => {
	const htmlFor: string = useId()
	const showingResults: boolean = !!results?.length && showResults

	const inputClasses: string = classNames(styles.input, "relative flex flex-column", {
		[styles.inputDisabled]: isDisabled,
		[styles.inputShowingResults]: showingResults,
	})

	return (
		<div className={inputClasses}>
			<InputLabel id={htmlFor} label={label} isDisabled={isDisabled} isHidden={isLabelHidden} />
			<Flex className="grow-1">
				<input
					className={styles.input__input}
					disabled={isDisabled}
					id={htmlFor}
					onBlur={onBlur}
					type={type}
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
			{showingResults && (
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
