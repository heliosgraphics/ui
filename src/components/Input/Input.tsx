"use client"

import { useState, useRef, useEffect, useId } from "react"
import Flex from "../Flex"
import Text from "../Text"
import Spacer from "../Spacer"
import ResultList from "../ResultList"
import Loading from "../Loading"
import styles from "./Input.module.css"
import classNames from "@sindresorhus/class-names"
import type { InputProps } from "./Input.types"

const Input: React.FC<InputProps> = ({
	onChange,
	onBlur,
	helperText,
	results,
	label,
	placeholder,
	value,
	isLoading,
	isLabelHidden,
	isDisabled,
	isRequired,
	onFocus,
}) => {
	const [isActive, setActive] = useState(false)
	const textareaRef = useRef<HTMLTextAreaElement | null>(null)

	const htmlFor: string = useId()
	const inputClasses: string = classNames(
		styles.input,
		"flex flex-column gap-3",
	)

	const onInput = () => {
		if (textareaRef?.current) {
			textareaRef.current.style.height = "auto"
			textareaRef.current.style.height = textareaRef.current.scrollHeight + "px"
		}
	}

	useEffect(() => {
		if (textareaRef?.current) {
			onInput()
		}
	}, [])

	const onInputBlur = (event) => {
		setActive(false)

		onBlur?.(event)
	}

	const onInputFocus = (event) => {
		setActive(true)

		onFocus?.(event)
	}

	const hasResults: boolean = typeof results !== "undefined"

	return (
		<div className={inputClasses}>
			{label && !isLabelHidden && (
				<label className="small gray-500 unselectable" htmlFor={htmlFor}>
					{label}
				</label>
			)}
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
					<div className={styles.input__input__loading}>
						<Loading size={10} />
					</div>
				)}
			</Flex>
			{hasResults && (
				<div className="relative">
					<Spacer gap={8} />
					<ResultList items={results!} />
				</div>
			)}
			{!!helperText && (
				<Text type="tiny" emphasis="tertiary" className="mt-2">
					{helperText}
				</Text>
			)}
		</div>
	)
}

export default Input
