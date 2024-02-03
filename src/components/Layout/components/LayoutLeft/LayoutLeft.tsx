"use client"

import { useContext, type FC } from "react"
import styles from "./LayoutLeft.module.css"
import Button from "../../../Button"
import ButtonGroup from "../../../ButtonGroup"
import classNames from "@sindresorhus/class-names"
import { LayoutContext } from "../../contexts/LayoutProvider"
import type { LayoutLeftProps } from "./LayoutLeft.types"

const LayoutLeft: FC<LayoutLeftProps> = ({ children }) => {
	const { isActive, setActive } = useContext(LayoutContext)
	const onToggleActive = () => setActive(!isActive)

	const navigationLeftClasses: string = classNames(styles.navigationLeft, {
		[styles.navigationLeftActive]: isActive,
		[styles.navigationLeftInactive]: !isActive,
	})

	return (
		<aside className={navigationLeftClasses}>
			<nav className={`${styles.navigationLeft__button} flex flex-center`}>
				<ButtonGroup>
					<Button
						intent="silent"
						value="Menu"
						size="small"
						icon="bars"
						isIconOnly={true}
						onClick={onToggleActive}
					/>
				</ButtonGroup>
			</nav>
			<nav className={styles.navigationLeft__nav}>{children}</nav>
		</aside>
	)
}

export default LayoutLeft
