"use client"

import { FC } from "react"
import styles from "./NavigationPanel.module.css"
import type { NavigationPanelProps } from "./NavigationPanel.types"

const NavigationPanel: FC<NavigationPanelProps> = ({ children }) => {
	return (
		<nav id="ui-navigation" className={styles.navigationPanel} data-component="NavigationPanel">
			{children}
		</nav>
	)
}

export default NavigationPanel
