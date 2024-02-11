import classNames from "@sindresorhus/class-names"
import { Flex, Icon } from "../.."
import styles from "./Pill.module.css"
import Text from "../Text/Text"
import type { FC } from "react"
import type { PillProps } from "./Pill.types"

const Pill: FC<PillProps> = ({ color = "gray", isMono, label, isSmall, icon, isRounded, isDark = false }) => {
	const textColor: string = `hsl(var(--${color}-hue), var(--${color}-saturation), 20%)`
	const pillColor: string = `hsla(var(--${color}-hue), var(--${color}-saturation), 50%, 0.25)`
	const pillColorDark: string = `hsl(var(--${color}-hue), var(--${color}-saturation), 40%)`

	const pillClass = classNames("non-selectable break-word", styles.pill, {
		[styles.pillRounded]: isRounded,
		[`radius-small`]: !isRounded,
		[styles.pillNormal]: !isSmall,
		[styles.pillSmall]: isSmall,
		[styles.pillDark]: isDark,
		[styles.pillIcon]: !!icon,
	})
	const pillTextSize = isSmall ? "tiny" : "small"

	return (
		<Flex
			className={pillClass}
			isCentered={true}
			style={{ backgroundColor: isDark ? pillColorDark : pillColor, color: isDark ? undefined : textColor }}
			gap={2}
		>
			{icon && <Icon size={isSmall ? 16 : 24} name={icon} />}
			<Text
				color="currentcolor"
				type={pillTextSize}
				whiteSpace="nowrap"
				fontFamily={isMono ? "mono" : undefined}
				fontWeight="medium"
			>
				{label}
			</Text>
		</Flex>
	)
}

export default Pill
