"use client"

import { FC } from "react"
import { Input } from "../.."
import { getClasses } from "@heliosgraphics/utils"
import styles from "./MenuFilter.module.css"
import type { MenuFilterProps } from "./MenuFilter.types"

const MenuFilter: FC<MenuFilterProps> = ({ value, onClear, onChange }) => {
	const menuFilterClasses: string = getClasses(styles.menuFilter, "helios-ui-glass-1")

	return (
		<div className={menuFilterClasses} data-component="MenuFilter">
			<Input
				placeholder="Search"
				value={value}
				onChange={onChange}
				onClear={onClear}
				label="Search"
				isLabelHidden={true}
			/>
		</div>
	)
}

export { MenuFilter }
