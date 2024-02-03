"use client"

import { useContext, type FC } from "react"
import styles from "./LayoutContent.module.css"
import { LayoutContext } from "../../contexts/LayoutProvider"
import type { LayoutContentProps } from "./LayoutContent.types"

const LayoutContent: FC<LayoutContentProps> = ({ children }) => {
	const { setActive } = useContext(LayoutContext)
	const onClick = () => setActive(false)

	return (
		<section onClick={onClick} className={styles.layoutContent}>
			{children}
		</section>
	)
}

export default LayoutContent
