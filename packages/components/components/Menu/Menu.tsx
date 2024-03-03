"use client"

import { FC } from "react"
import styles from "./NavigationPanel.module.css"
import { getClasses } from "@heliosgraphics/utils"
import type { MenuProps } from "./Menu.types"

const Menu: FC<MenuProps> = ({ children }) => {
	const menuClasses: string = getClasses(styles.menu, "helios-scrollbar")

	return (
		<nav id="ui-menu" className={menuClasses} data-component="Menu">
			{children}
		</nav>
	)
}

export default Menu
