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

	const onMenuClick = () => {
		const isMenuActive: boolean = globalThis.location.hash === "#ui-menu"

		if (isMenuActive) globalThis.location.hash = "#ui"
	}

	return (
		<div className={menuItemClasses} data-component="MenuItem" onClick={onMenuClick}>
			<Text type="small" fontWeight="medium">
				{title}
			</Text>
		</div>
	)
}

export default MenuItem
