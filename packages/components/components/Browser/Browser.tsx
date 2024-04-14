import { getClasses } from "@heliosgraphics/utils/classnames"
import styles from "./Browser.module.css"
import type { BrowserProps } from "./Browser.types"
import type { FC } from "react"

const Browser: FC<BrowserProps> = ({ children }) => {
	const browserClasses: string = getClasses(styles.browser)

	return <div className={browserClasses}>{children}</div>
}

export { Browser }
