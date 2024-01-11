"use client"

import React, { useState, useMemo, useRef, useEffect } from "react"
import Text from "../Text"
import styles from "./Textarea.module.css"
import classNames from "@sindresorhus/class-names"
import { getUUID } from "@heliosgraphics/utils/uuid"
import type { TextareaProps } from "./Textarea.types"

const Textarea: React.FC<TextareaProps> = (props) => {
	const [isActive, setActive] = useState(false)
	const textareaRef = useRef<HTMLTextAreaElement | null>(null)
	const { autoComplete, helperText, isDisabled, isLabelHidden, ...goodProps } =
		props

	const htmlFor: string = useMemo(() => getUUID(props.id), [props.id])

	const inputClasses: string = classNames(
		styles.textarea,
		"flex flex-column flex-gap-2",
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

		setTimeout(() => onInput(), 100)
	}, [props.value])

	const onBlur = () => {
		setActive(false)
	}

	const onFocus = () => {
		setActive(true)
	}

	return (
		<div className={inputClasses}>
			{props.label && (
				<label className="small gray-500" htmlFor={htmlFor}>
					{props.label}
				</label>
			)}
			<textarea
				{...goodProps}
				ref={textareaRef}
				id={htmlFor}
				rows={goodProps.rows ?? 4}
				onInput={onInput}
				onLoad={onInput}
				disabled={isDisabled}
				onFocus={onFocus}
				onBlur={onBlur}
			/>
			{!!props.helperText && (
				<Text type="tiny" color="light-gray" className="mt-2">
					{props.helperText}
				</Text>
			)}
		</div>
	)
}

export default Textarea
