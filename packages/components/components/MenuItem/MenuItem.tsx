"use client"

import { FC } from "react"
import styles from "./MenuItem.module.css"
import { getClasses } from "@heliosgraphics/utils"
import { Text } from "../.."
import type { MenuItemProps } from "./MenuItem.types"

const MenuItem: FC<MenuItemProps> = ({ isActive, title }) => {
	const menuItemClasses: string = getClasses(styles.menuItem, {
		[styles.menuItemActive]: isActive,
	})

	return (
		<div className={menuItemClasses} data-component="MenuItem">
			<Text type="small" fontWeight="medium">
				{title}
			</Text>
		</div>
	)
}

export default MenuItem
