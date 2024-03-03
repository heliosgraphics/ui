"use client"

import { FC } from "react"
import styles from "./MenuItem.module.css"
import { getClasses } from "@heliosgraphics/utils"
import type { MenuItemProps } from "./MenuItem.types"

const MenuItem: FC<MenuItemProps> = ({ title }) => {
	const menuItemClasses: string = getClasses(styles.menuItem)

	return (
		<div className={menuItemClasses} data-component="MenuItem">
			{title}
		</div>
	)
}

export default MenuItem
