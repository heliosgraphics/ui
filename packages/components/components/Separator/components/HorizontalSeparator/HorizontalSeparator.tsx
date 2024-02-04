import classNames from "@sindresorhus/class-names"
import HRMarkup from "../HRMarkup"
import styles from "./HorizontalSeparator.module.css"
import type { FC } from "react"
import type { SeparatorProps } from "../../../Separator/Separator.types"

const HorizontalSeparator: FC<SeparatorProps> = ({ isLight, className }) => {
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
