import React from "react"
import classNames from "@sindresorhus/class-names"
import Dot from "../Dot"
import Flex from "../Flex"
import Icon from "../Icon"
import Loading from "../Loading"
import styles from "./Button.module.css"
import type { ButtonProps } from "./Button.types"

const BUTTON_ICON_SIZE: Record<string, number> = {
	tiny: 14,
	small: 18,
	normal: 24,
}

const Button: React.FC<ButtonProps> = ({
	flair,
	icon,
	value,
	intent,
	isActive,
	isDisabled,
	isIconOnly,
	isLoading,
	isRounded,
	onClick,
	size,
	tabIndex,
	type,
}) => {
	const isIconOnlyLoading: boolean = !!isIconOnly && !!isLoading

	const buttonClasses = classNames(
		styles.button,
		"relative sans cursor-pointer",
		{
			[styles.buttonAdvise]: intent === "advise",
			[styles.buttonConfirmation]: intent === "confirmation",
			[styles.buttonError]: intent === "error",
			[styles.buttonHighlight]: intent === "highlight",
			[styles.buttonQuestion]: intent === "question",
			[styles.buttonSuccess]: intent === "success",
			[styles.buttonWarning]: intent === "warning",

			[styles.buttonActive]: isActive,
			[styles.buttonDisabled]: isDisabled,
			[styles.buttonLoading]: isLoading,

			"radius-3": !isRounded && size !== "tiny",
			"radius-2": !isRounded && size === "tiny",
			"radius-max": isRounded,

			[styles.buttonSizeNormal]: !size || size === "normal",
			[styles.buttonSizeSmall]: size === "small",
			[styles.buttonSizeTiny]: size === "tiny",

			[styles.buttonWithIcon]: !!icon,
			[styles.buttonIconOnly]: isIconOnly,
			[styles.buttonIconOnlyLoading]: isIconOnlyLoading,
		},
	)

	const buttonInputClasses = classNames("sans w-100 h-100", {
		"tiny fw-medium": size === "tiny" || size === "small",
		"small fw-semi-bold": !size || size === "normal",

		"radius-3": !isRounded && size !== "tiny",
		"radius-2": !isRounded && size === "tiny",
		"radius-max": isRounded,

		"px-6": (!size || size === "normal") && !isIconOnly,
		"px-4": size === "small" && !isIconOnly,
		"px-3": size === "tiny" && !isIconOnly,
	})

	const buttonLoadingSize: 10 | 20 = size && size !== "normal" ? 10 : 20

	return (
		<Flex
			className={buttonClasses}
			isInline={true}
			isCentered={true}
			onClick={onClick}
			data-component="Button"
		>
			{!!icon && !isIconOnlyLoading && (
				<Flex className={styles.button__icon}>
					<Icon name={icon} size={BUTTON_ICON_SIZE[size || "normal"]} />
				</Flex>
			)}
			{!!flair && (
				<Flex className={styles.button__flair}>
					<Dot size={6} color={flair} />
				</Flex>
			)}
			<input
				type={type}
				className={buttonInputClasses}
				aria-pressed={!!isActive}
				aria-disabled={!!isDisabled}
				tabIndex={tabIndex ?? 0}
				role="button"
				value={isIconOnly ? "" : value}
			/>
			{isLoading && (
				<Loading size={buttonLoadingSize} className={styles.button__loading} />
			)}
		</Flex>
	)
}

export default Button
