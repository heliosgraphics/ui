import { getFlexUtility } from "../Flex/Flex.utils"
import classNames from "@sindresorhus/class-names"
import styles from "./Main.module.css"
import type { FC } from "react"
import type { MainProps } from "./Main.types"

const Main: FC<MainProps> = (props) => {
	const mainFlexClasses: string = getFlexUtility({ ...props, isColumn: true })
	const mainClasses: string = classNames(mainFlexClasses, styles.main, {
		[styles.mainAlternativeBackground]: props.withAlternativeBackground,
	})

	return <main className={mainClasses}>{props.children}</main>
}

export default Main
