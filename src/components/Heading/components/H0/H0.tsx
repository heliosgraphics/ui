import React from "react"
import styles from "./H0.module.css"
import type { FUITypographyUtility } from "@heliosgraphics/library/types/typography"

const H0: React.FC<FUITypographyUtility> = (props) => {
	return <h1 {...props} className={`h1 ${styles.h0}`} />
}

export default H0
