import React from "react"
import { getTypographyUtility } from "./Text.utils"
import Div from "./components/Div/Div"
import P from "./components/P/P"
import Small from "./components/Small/Small"
import Tiny from "./components/Tiny/Tiny"
import styles from "./Text.module.css"
import classNames from "@sindresorhus/class-names"
import type { TextProps } from "./Text.types"

const Text: React.FC<TextProps> = (props) => {
	const textClasses: string = classNames(styles.text, props.className, {
		[styles.textPrimary]: props.emphasis === "primary",
		[styles.textSecondary]: props.emphasis === "secondary",
		[styles.textTertiary]: props.emphasis === "tertiary",
		[styles.textSilent]: props.emphasis === "silent",
	})

	const utility: string = getTypographyUtility({
		...props,
		className: textClasses,
	})
	const { lineClamp, isEllipsis, whiteSpace, type, textAlign, ...validProps } =
		props

	const lineClampStyle = props.lineClamp
		? {
				display: "-webkit-box",
				WebkitLineClamp: props.lineClamp,
				WebkitBoxOrient: "vertical",
				overflow: "hidden",
			}
		: undefined

	const allProps = {
		...validProps,
		style: lineClampStyle,
		className: utility,
	}

	switch (props.type) {
		case "div":
			return <Div {...allProps} />
		case "paragraph":
			return <P {...allProps} />
		case "small":
			return <Small {...allProps} />
		case "tiny":
			return <Tiny {...allProps} />
		default:
			return <Div {...allProps} />
	}
}

export default Text
