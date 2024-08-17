import { getClasses } from "@heliosgraphics/utils/classnames"
import { Dot, Flex, HeliosIconType, Icon, Loading, Text } from "../.."
import styles from "./Button.module.css"
import type { ButtonProps } from "./Button.types"
import type { FC } from "react"

const BUTTON_ICON_SIZE: Record<string, number> = {
	tiny: 14,
	small: 18,
	normal: 24,
}

export const Button: FC<ButtonProps> = ({
	flair,
	icon,
	iconLeft,
	iconRight,
	accept,
	value,
	intent,
	isDisabled,
	isIconOnly,
	isLoading,
	isRounded,
	onChange,
	onClick,
	size = "normal",
	tabIndex,
	type = "button",
}) => {
	const isIconOnlyLoading: boolean = !!isIconOnly && !!isLoading
	const localIconLeft: HeliosIconType | undefined = icon || iconLeft
	const localIconRight: HeliosIconType | undefined = iconRight

	const buttonClasses = getClasses(styles.button, "relative cursor-pointer", {
		[styles.buttonAdvise]: intent === "advise",
		[styles.buttonAutomation]: intent === "automation",
		[styles.buttonConfirmation]: intent === "confirmation",
		[styles.buttonDanger]: intent === "danger",
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

		[styles.buttonWithIconLeft]: localIconLeft,
		[styles.buttonIconOnly]: isIconOnly,
		[styles.buttonIconOnlyLoading]: isIconOnlyLoading,
	})

	const buttonInputClasses = getClasses("sans fw-medium", {
		tiny: size === "tiny" || size === "small",
		"small ": !size || size === "normal",
		"radius-max": isRounded,
		"px-6": size === "normal" && !isIconOnly,
		"px-4": size !== "normal" && !isIconOnly,
	})

	const buttonIconClasses = getClasses(styles.button__icon, "relative")
	const buttonLoadingSize: 10 | 20 = size && size !== "normal" ? 10 : 20

	const isFileType: boolean = type === "file"

	return (
		<Flex className={buttonClasses} isInline={true} isCentered={true} onClick={onClick} data-component="Button">
			{localIconLeft && !isIconOnlyLoading && (
				<Flex className={buttonIconClasses}>
					<Icon icon={localIconLeft} size={BUTTON_ICON_SIZE[size]} />
				</Flex>
			)}
			{!!flair && (
				<Flex className={styles.button__flair} isCentered={true}>
					<Text type="tiny" fontFamily="mono">
						{flair}
					</Text>
				</Flex>
			)}
			<input
				aria-disabled={isDisabled}
				type={type}
				className={buttonInputClasses}
				accept={accept}
				tabIndex={tabIndex ?? 0}
				role={isFileType ? undefined : "button"}
				onChange={onChange}
				defaultValue={isIconOnly || isFileType ? undefined : value}
				value={isFileType ? "" : undefined}
			/>
			{isLoading && <Loading size={buttonLoadingSize} className={styles.button__loading} />}
			{localIconRight && !isIconOnlyLoading && (
				<Flex className={buttonIconClasses}>
					<Icon icon={localIconRight} size={BUTTON_ICON_SIZE[size]} />
				</Flex>
			)}
		</Flex>
	)
}
