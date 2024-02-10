import type { FC } from "react"
import Text from "../Text/Text"
import Flex from "../Flex/Flex"
import classNames from "@sindresorhus/class-names"
import type { PillProps } from "./Pill.types"

const Pill: FC<PillProps> = ({ color = "gray", isMono, label, isSmall, isRounded, isDark = false }) => {
	const pillClass = classNames("unselectable break-word", {
		// Roundness
		[`radius-max`]: isRounded,
		[`radius-2`]: !isRounded,
		// Dark
		[`bg-${color}-600`]: color && isDark,
		[`gray-0`]: color && isDark,
		// Light
		[`bg-${color}-100`]: color && !isDark,
		[`${color}-600`]: color && !isDark,
		// Sizes
		"hmin-13 px-5": !isSmall,
		"hmin-10 px-3": isSmall,
	})
	const pillTextSize = isSmall ? "tiny" : "small"

	return (
		<Flex className={pillClass} isCentered={true}>
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
