import { getClasses } from "@heliosgraphics/utils/classnames"
import HRMarkup from "../HRMarkup"
import styles from "./VerticalSeparator.module.css"
import type { FC } from "react"
import type { SeparatorProps } from "../../../Separator/Separator.types"

const VerticalSeparator: FC<SeparatorProps> = ({ isLight, isTransparent, height }) => {
	const hrClassNames: string = getClasses(styles.verticalSeparator, {
		[styles.verticalSeparatorRegular]: !isLight,
		[styles.verticalSeparatorLight]: isLight,
		[styles.verticalSeparatorTransparent]: isTransparent,
	})

	const verticalStyle = {
		height: !!height ? `${height ?? 0}px` : "auto",
	}

	return <HRMarkup style={verticalStyle} className={hrClassNames} />
}

export default VerticalSeparator
