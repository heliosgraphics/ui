import { getFlexUtility, getSafeFlexProps } from "../Flex/Flex.utils"
import classNames from "@sindresorhus/class-names"
import styles from "./Navigation.module.css"
import type { FC } from "react"
import type { NavigationProps } from "./Navigation.types"

const Navigation: FC<NavigationProps> = (props) => {
	const mainFlexClasses: string = getFlexUtility({ ...props, isYCentered: true, paddingX: 8 })
	const navigationClasses: string = classNames(mainFlexClasses, "sticky top-0 z-50", {
		["helios-ui-bg"]: !props.withGlass,
		["helios-ui-glass-1"]: props.withGlass,
	})
	const safeProps = getSafeFlexProps(props)

	return (
		<nav {...safeProps} style={{ height: `${props.height ?? 0}px` }} className={navigationClasses}>
			{props.children}
		</nav>
	)
}

export default Navigation
