"use client"

import { FC } from "react"
import styles from "./Menu.module.css"
import { getClasses } from "@thebeguide/utils"
import type { MenuProps } from "./Menu.types"

export const Menu: FC<MenuProps> = ({ children }) => {
	const menuClasses: string = getClasses(styles.menu, "flex flex-column thebe-scrollbar thebe-scrollbar--narrow")

	return (
		<nav id="ui-menu" className={menuClasses} data-component="Menu">
			{children}
		</nav>
	)
}
