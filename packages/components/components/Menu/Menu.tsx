"use client"

import { FC } from "react"
import styles from "./Menu.module.css"
import { getClasses } from "@heliosgraphics/utils"
import type { MenuProps } from "./Menu.types"

const Menu: FC<MenuProps> = ({ children }) => {
	const menuClasses: string = getClasses(styles.menu, "helios-scrollbarx")

	return (
		<nav id="ui-menu" className={menuClasses} data-component="Menu">
			{children}
		</nav>
	)
}

export default Menu
