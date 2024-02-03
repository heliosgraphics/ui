import styles from "./LayoutTop.module.css"
import type { FC } from "react"
import type { LayoutTopProps } from "./LayoutTop.types"

const LayoutTop: FC<LayoutTopProps> = ({ children }) => {
	return <nav className={styles.layoutTop}>{children}</nav>
}

export default LayoutTop
