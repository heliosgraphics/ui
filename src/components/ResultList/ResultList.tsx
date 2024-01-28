import React from "react"
import Icon from "../Icon"
import Flex from "../Flex"
import Text from "../Text"
import styles from "./ResultList.module.css"
import classNames from "@sindresorhus/class-names"
import type { ResultListProps } from "./ResultList.types"

const ResultList: React.FC<ResultListProps> = ({ items }) => {
	if (!items?.length) return null

	return (
		<ol className={styles.resultList + " shadow-2"}>
			{items?.map((item, key) => {
				if (item.type === "separator")
					return <li key={key} className={styles.resultList__separator} />

				const itemClasses: string = classNames("flex flex-y-center gap-5", {
					[styles.itemActive]: item.isActive,
				})

				return (
					<li key={key} onClick={item.onClick} className={itemClasses}>
						{item.icon && (
							<Flex isCentered={true} className={styles.resultList__icon}>
								<Icon
									size={18}
									name={item.icon}
									color={item.iconColor || "dark-gray"}
								/>
							</Flex>
						)}
						<Flex isColumn={true} gap={1}>
							<Text type="small" fontWeight="medium" color="dark-gray">
								{item.name}
							</Text>
							{!!item.description && (
								<Text type="tiny" fontFamily="sans" color="gray">
									{item.description}
								</Text>
							)}
						</Flex>
					</li>
				)
			})}
		</ol>
	)
}

export default ResultList
