import React from "react"
import Icon from "../Icon"
import Text from "../Text"
import styles from "./Details.module.css"
import type { DetailsProps } from "./Details.types"

const Details: React.FC<DetailsProps> = ({ children }) => {
	return (
		<details className={styles.details}>
			<summary className="flex space-between flex-y-center">
				<Text type="small">Danger Zone</Text>
				<Icon name="caret-down" size={20} color="gray" />
			</summary>
			{children}
		</details>
	)
}

export default Details
