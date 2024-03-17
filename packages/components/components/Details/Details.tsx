import styles from "./Details.module.css"
import { Icon, Text } from "../.."
import type { DetailsProps } from "./Details.types"
import type { FC } from "react"

const Details: FC<DetailsProps> = ({ children, title, isOpen }) => {
	return (
		<details className={styles.details} open={isOpen}>
			<summary className="flex space-between flex-y-center">
				<Text type="small" fontWeight="medium">
					{title}
				</Text>
				<Icon name="caret-down" size={20} emphasis="tertiary" />
			</summary>
			{children}
		</details>
	)
}

export { Details }
