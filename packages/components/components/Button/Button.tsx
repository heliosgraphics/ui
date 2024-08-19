import { getClasses } from "@heliosgraphics/utils/classnames"
import { Flex, HeliosIconType, Icon, Loading, Text } from "../.."
import styles from "./Button.module.css"
import type { ButtonProps } from "./Button.types"
import { useId, type FC } from "react"

const BUTTON_ICON_SIZE: Record<string, number> = {
	tiny: 14,
	small: 18,
	normal: 24,
}

export const Button: FC<ButtonProps> = ({
	accept,
	flair,
	icon,
	iconLeft,
	iconRight,
	intent,
	isDisabled,
	isIconOnly,
	isLoading,
	isRounded,
	multiple,
	onChange,
	onClick,
	size = "normal",
	tabIndex,
	type = "button",
	value,
}) => {
	const buttonId = useId()
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
		[styles.buttonWithIconRight]: localIconRight,
		[styles.buttonIconOnly]: isIconOnly,
		[styles.buttonIconOnlyLoading]: isIconOnlyLoading,
	})

	const buttonIconLeftClasses = getClasses("relative", styles.button__icon, {
		[styles.button__iconLeft]: localIconLeft,
	})

	const buttonIconRightClasses = getClasses("relative", styles.button__icon, {
		[styles.button__iconRight]: localIconRight,
	})

	const buttonLoadingSize: 10 | 20 = size && size !== "normal" ? 10 : 20
	const isFileType: boolean = type === "file"
	const showFileLabel: boolean = isFileType && !isIconOnly

	const baseInputClasses = getClasses(styles.button__baseElement, "sans fw-medium", {
		tiny: size === "tiny" || size === "small",
		"small ": !size || size === "normal",
		"radius-max": isRounded,
		"px-6": size === "normal" && !isIconOnly,
		"px-4": size !== "normal" && !isIconOnly,
	})

	const buttonLabelClasses: string = getClasses(baseInputClasses, styles.button__label)
	const buttonInputClasses: string = getClasses(baseInputClasses, styles.button__input, {
		[styles.button__inputFile]: isFileType,
	})

	return (
		<Flex className={buttonClasses} isInline={true} isCentered={true} onClick={onClick} data-component="Button">
			{localIconLeft && !isIconOnlyLoading && (
				<Flex className={buttonIconLeftClasses}>
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
				id={buttonId}
				aria-disabled={isDisabled}
				type={type}
				className={buttonInputClasses}
				accept={accept}
				multiple={multiple}
				tabIndex={tabIndex ?? 0}
				role="button"
				onChange={onChange}
				defaultValue={isIconOnly || isFileType ? "" : value}
			/>
			{showFileLabel && (
				<label htmlFor={buttonId} className={buttonLabelClasses}>
					{value}
				</label>
			)}
			{isLoading && <Loading size={buttonLoadingSize} className={styles.button__loading} />}
			{localIconRight && !isIconOnlyLoading && (
				<Flex className={buttonIconRightClasses}>
					<Icon icon={localIconRight} size={BUTTON_ICON_SIZE[size]} />
				</Flex>
			)}
		</Flex>
	)
}
