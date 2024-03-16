import { getClasses } from "@heliosgraphics/utils/classnames"
import styles from "./Content.module.css"
import type { FC } from "react"
import type { ContentProps } from "./Content.types"
import { Column } from "../.."

const Content: FC<ContentProps> = (props) => {
	const contentClasses: string = getClasses(styles.content, "helios-scrollbar", props.className)
	const { width = 960, ...flexProps } = props

	return (
		<section className={contentClasses} data-component="Content">
			<Column width={width} {...flexProps}>
				{props.children}
			</Column>
		</section>
	)
}

export { Content }
