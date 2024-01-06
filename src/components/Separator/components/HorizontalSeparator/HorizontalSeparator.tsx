import React from "react"
import HRMarkup from "../HRMarkup"
import classNames from "@sindresorhus/class-names"
import styles from "./HorizontalSeparator.module.css"
import type { SeparatorProps } from "../../../Separator/Separator.types"

const HorizontalSeparator: React.FC<SeparatorProps> = ({
	isLight,
	className,
}) => {
	const hrClassNames: string = classNames(
		styles.horizontalSeparator,
		className,
		{
			[styles.horizontalSeparatorRegular]: !isLight,
			[styles.horizontalSeparatorLight]: isLight,
		},
	)

	return <HRMarkup className={hrClassNames} />
}

export default HorizontalSeparator
