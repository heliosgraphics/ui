import { getClasses } from "@heliosgraphics/utils/classnames"
import { HRMarkup } from "../HRMarkup/HRMarkup"
import styles from "./HorizontalSeparator.module.css"
import type { FC } from "react"
import type { SeparatorProps } from "../../../Separator/Separator.types"

const HorizontalSeparator: FC<SeparatorProps> = ({ isLight, isTransparent, className }) => {
	const hrClassNames: string = getClasses(styles.horizontalSeparator, className, {
		[styles.horizontalSeparatorRegular]: !isLight,
		[styles.horizontalSeparatorLight]: isLight,
		[styles.horizontalSeparatorTransparent]: isTransparent,
	})

	return <HRMarkup className={hrClassNames} />
}

export { HorizontalSeparator }
