import classNames from "@sindresorhus/class-names"
import styles from "./H0.module.css"
import type { FC } from "react"
import type { H0Props } from "./H0.types"

const H0: FC<H0Props> = (props) => {
	const h0Classes: string = classNames(props.className, "h1", styles.h0)

	return <h1 {...props} className={h0Classes} data-component="Heading.H0" />
}

export default H0
