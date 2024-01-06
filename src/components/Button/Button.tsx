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

const Button: React.FC<ButtonProps> = (props) => {
	const isIconOnlyLoading: boolean = !!props.isIconOnly && !!props.isLoading

	const buttonClasses = classNames(
		styles.button,
		"relative sans cursor-pointer",
		{
			// Types
			[styles.buttonPrimary]: props.type === "primary",
			[styles.buttonSecondary]: props.type === "secondary",
			[styles.buttonSilent]: props.type === "silent",
			[`${styles.buttonOpaque} dark-glass-1`]: props.type === "opaque",

			// Variants
			[styles.buttonActive]: props.isActive,
			[styles.buttonDisabled]: props.isDisabled,
			[styles.buttonLoading]: props.isLoading,

			// Radius
			"radius-3": !props.isRounded && props.size !== "tiny",
			"radius-2": !props.isRounded && props.size === "tiny",
			"radius-max": props.isRounded,

			// Sizes
			[styles.buttonSizeNormal]: !props.size || props.size === "normal",
			[styles.buttonSizeSmall]: props.size === "small",
			[styles.buttonSizeTiny]: props.size === "tiny",

			// Colors
			[styles.buttonColorAqua]: props.color === "aqua",
			[styles.buttonColorBlue]: props.color === "blue",
			[styles.buttonColorGray]: props.color === "gray",
			[styles.buttonColorGreen]: props.color === "green",
			[styles.buttonColorOrange]: props.color === "orange",
			[styles.buttonColorPink]: props.color === "pink",
			[styles.buttonColorPurple]: props.color === "purple",
			[styles.buttonColorRed]: props.color === "red",
			[styles.buttonColorYellow]: props.color === "yellow",

			// Icon only
			[styles.buttonWithIcon]: !!props.icon,
			[styles.buttonIconOnly]: props.isIconOnly,
			[styles.buttonIconOnlyLoading]: isIconOnlyLoading,
		},
	)

	const buttonInputClasses = classNames("sans w-100 h-100", {
		// Fonts
		"tiny fw-medium": props.size === "tiny" || props.size === "small",
		"small fw-semi-bold": !props.size || props.size === "normal",

		"radius-3": !props.isRounded && props.size !== "tiny",
		"radius-2": !props.isRounded && props.size === "tiny",
		"radius-max": props.isRounded,

		// Sizes
		"px-6": (!props.size || props.size === "normal") && !props.isIconOnly,
		"px-4": props.size === "small" && !props.isIconOnly,
		"px-3": props.size === "tiny" && !props.isIconOnly,
	})

	const buttonLoadingSize: 10 | 20 =
		props.size && props.size !== "normal" ? 10 : 20
	const buttonInputType: "submit" | "button" =
		props.type === "primary" && !props.color ? "submit" : "button"

	// const onButtonClick = (event: React.MouseEvent): void => props.onClick?.(event);

	return (
		<Flex
			className={buttonClasses}
			isInline={true}
			isCentered={true}
			onClick={props.onClick}
			data-component="Button"
		>
			{!!props.icon && !isIconOnlyLoading && (
				<Flex className={styles.button__icon}>
					<Icon
						name={props.icon}
						size={BUTTON_ICON_SIZE[props.size || "normal"]}
					/>
				</Flex>
			)}
			{!!props.flair && (
				<Flex className={styles.button__flair}>
					<Dot size={6} color={props.flair} />
				</Flex>
			)}
			<input
				type={buttonInputType}
				className={buttonInputClasses}
				aria-pressed={!!props.isActive}
				aria-disabled={!!props.isDisabled}
				tabIndex={props.tabIndex ?? 0}
				role="button"
				value={props.isIconOnly ? "" : props.value}
			/>
			{props.isLoading && (
				<Loading
					size={buttonLoadingSize}
					color="currentcolor"
					className={styles.button__loading}
				/>
			)}
		</Flex>
	)
}

export default Button
