"use client"

import { useId, useRef, useEffect } from "react"
import Text from "../Text"
import styles from "./Textarea.module.css"
import classNames from "@sindresorhus/class-names"
import InputLabel from "../InputLabel"
import type { FC } from "react"
import type { TextareaProps } from "./Textarea.types"

const Textarea: FC<TextareaProps> = (props) => {
	const textareaRef = useRef<HTMLTextAreaElement | null>(null)
	const { autoComplete, helperText, isDisabled, isLabelHidden, ...goodProps } = props

	const htmlFor: string = props.id || useId()
	const textareaClasses: string = classNames(styles.textarea, "flex flex-column", {
		[styles.textareaDisabled]: props.isDisabled,
	})

	const onInput = () => {
		if (textareaRef?.current) {
			textareaRef.current.style.height = "auto"
			textareaRef.current.style.height = textareaRef.current.scrollHeight + "px"
		}
	}

	// TODO no longer necessary <3
	useEffect(() => {
		if (textareaRef?.current) {
			onInput()
		}

		setTimeout(() => onInput(), 100)
	}, [props.value])

	return (
		<div className={textareaClasses}>
			<InputLabel id={htmlFor} label={props.label} isDisabled={isDisabled} isHidden={isLabelHidden} />
			<textarea
				{...goodProps}
				ref={textareaRef}
				id={htmlFor}
				rows={goodProps.rows ?? 4}
				onInput={onInput}
				onLoad={onInput}
				disabled={isDisabled}
			/>
			{!!props.helperText && (
				<Text type="tiny" emphasis="tertiary" className={styles.input__helper}>
					{props.helperText}
				</Text>
			)}
		</div>
	)
}

export default Textarea
