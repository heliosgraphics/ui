"use client"

import React, { useState, useMemo, useRef, useEffect } from "react"
import Flex from "../Flex"
import Text from "../Text"
import Spacer from "../Spacer"
import ResultList from "../ResultList"
import Loading from "../Loading"
import styles from "./Input.module.css"
import classNames from "@sindresorhus/class-names"
import { getUUID } from "@heliosgraphics/utils/uuid"
import type { InputProps } from "./Input.types"

const Input: React.FC<InputProps> = (props) => {
	const [isActive, setActive] = useState(false)
	const textareaRef = useRef<HTMLTextAreaElement | null>(null)
	const {
		helperText,
		isDisabled,
		isLabelHidden,
		isLoading,
		isRequired,
		results,
		...goodProps
	} = props

	const htmlFor: string = useMemo(() => getUUID(props.id), [props.id])

	const inputClasses: string = classNames(
		styles.input,
		"flex flex-column flex-gap-3",
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

	const onBlur = (event) => {
		setActive(false)

		props?.onBlur?.(event)
	}

	const onFocus = (event) => {
		setActive(true)

		props?.onFocus?.(event)
	}

	const hasResults: boolean = typeof results !== "undefined"

	return (
		<div className={inputClasses}>
			{props.label && !isLabelHidden && (
				<label className="small gray-500 unselectable" htmlFor={htmlFor}>
					{props.label}
				</label>
			)}
			<Flex className="grow-1">
				<input
					{...goodProps}
					id={htmlFor}
					className={styles.input__input}
					disabled={isDisabled}
					onFocus={onFocus}
					onBlur={onBlur}
					required={props.isRequired}
				/>
				{props.isLoading && (
					<div className={styles.input__input__loading}>
						<Loading size={10} color="gray" />
					</div>
				)}
			</Flex>
			{hasResults && (
				<div className="relative">
					<Spacer gap={8} />
					<ResultList items={results!} />
				</div>
			)}
			{!!props.helperText && (
				<Text type="tiny" color="light-gray" className="mt-2">
					{props.helperText}
				</Text>
			)}
		</div>
	)
}

export default Input
