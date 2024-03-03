import { getClasses } from "@heliosgraphics/utils/classnames"
import styles from "./Content.module.css"
import type { FC } from "react"
import type { ContentProps } from "./Content.types"
import Column from "../Column"

const Content: FC<ContentProps> = (props) => {
	const contentClasses: string = getClasses(styles.content, "helios-scrollbar")
	const { width = 960, ...flexProps } = props

	return (
		<section className={contentClasses} data-component="Content">
			<Column width={width} {...flexProps}>
				{props.children}
			</Column>
		</section>
	)
}

export default Content
