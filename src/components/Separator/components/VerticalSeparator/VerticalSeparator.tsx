import React from "react"
import classNames from "@sindresorhus/class-names"
import HRMarkup from "../HRMarkup"
import type { SeparatorProps } from "../../../Separator/Separator.types"
import styles from "./VerticalSeparator.module.css"

const VerticalSeparator: React.FC<SeparatorProps> = ({ isLight, height }) => {
	const hrClassNames: string = classNames(styles.verticalSeparator, {
		[styles.verticalSeparatorRegular]: !isLight,
		[styles.verticalSeparatorLight]: isLight,
	})

	const verticalStyle = {
		height: !!height ? `${height ?? 0}px` : "auto",
	}

	return <HRMarkup style={verticalStyle} className={hrClassNames} />
}

export default VerticalSeparator
