import classNames from "@sindresorhus/class-names"
import Dot from "../Dot"
import Flex from "../Flex"
import Icon from "../Icon"
import Loading from "../Loading"
import styles from "./Button.module.css"
import type { ButtonProps } from "./Button.types"
import type { FC } from "react"

const BUTTON_ICON_SIZE: Record<string, number> = {
	tiny: 14,
	small: 18,
	normal: 24,
}

const Button: FC<ButtonProps> = ({
	flair,
	icon,
	value,
	intent,
	isDisabled,
	isIconOnly,
	isLoading,
	isRounded,
	onClick,
	size = "normal",
	tabIndex,
	type = "button",
}) => {
	const isIconOnlyLoading: boolean = !!isIconOnly && !!isLoading

	const buttonClasses = classNames(styles.button, "relative cursor-pointer", {
		[styles.buttonAdvise]: intent === "advise",
		[styles.buttonAutomation]: intent === "automation",
		[styles.buttonConfirmation]: intent === "confirmation",
		[styles.buttonError]: intent === "error",
		[styles.buttonHighlight]: intent === "highlight",
		[styles.buttonQuestion]: intent === "question",
		[styles.buttonSilent]: intent === "silent",
		[styles.buttonSuccess]: intent === "success",
		[styles.buttonWarning]: intent === "warning",

		[styles.buttonDisabled]: isDisabled,
		[styles.buttonLoading]: isLoading,

		[styles.buttonRounded]: isRounded,
		[styles.buttonRound]: !isRounded && size !== "tiny",
		[styles.buttonRoundTiny]: !isRounded && size === "tiny",

		[styles.buttonSizeNormal]: !size || size === "normal",
		[styles.buttonSizeSmall]: size === "small",
		[styles.buttonSizeTiny]: size === "tiny",

		[styles.buttonWithIcon]: !!icon,
		[styles.buttonIconOnly]: isIconOnly,
		[styles.buttonIconOnlyLoading]: isIconOnlyLoading,
	})

	const buttonInputClasses = classNames("sans fw-medium", {
		tiny: size === "tiny" || size === "small",
		"small ": !size || size === "normal",

		"radius-3": !isRounded && size !== "tiny",
		"radius-2": !isRounded && size === "tiny",
		"radius-max": isRounded,

		"px-6": size === "normal" && !isIconOnly,
		"px-4": size !== "normal" && !isIconOnly,
	})

	const buttonIconClasses = classNames(styles.button__icon, "relative")

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
				<Flex className={buttonIconClasses}>
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
