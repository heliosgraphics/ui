import React from "react"
import styles from "./LayoutTop.module.css"
import type { LayoutTopProps } from "./LayoutTop.types"

const LayoutTop: React.FC<LayoutTopProps> = ({ children }) => {
	return <nav className={styles.layoutTop}>{children}</nav>
}

export default LayoutTop
