import React from "react"
import Icon from "../Icon"
import Text from "../Text"
import styles from "./Details.module.css"
import type { DetailsProps } from "./Details.types"

const Details: React.FC<DetailsProps> = ({ children, title, open = false }) => {
	return (
		<details className={styles.details} open={open}>
			<summary className="flex space-between flex-y-center">
				<Text type="small" fontWeight="medium">
					{title}
				</Text>
				<Icon name="caret-down" size={20} color="gray" />
			</summary>
			{children}
		</details>
	)
}

export default Details
