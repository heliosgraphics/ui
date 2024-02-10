import classNames from "@sindresorhus/class-names"
import Flex from "../Flex"
import Icon from "../Icon"
import styles from "./ResultList.module.css"
import Text from "../Text"
import type { FC } from "react"
import type { ResultListProps } from "./ResultList.types"

const ResultList: FC<ResultListProps> = ({ items }) => {
	if (!items?.length) return null

	return (
		<ol className={styles.resultList + " shadow-2"}>
			{items?.map((item, key) => {
				if (item.type === "separator")
					return <li key={key} className={styles.resultList__separator} />

				const itemClasses: string = classNames(
					"flex flex-y-center gap-5",
					styles.item,
					{
						[styles.itemActive]: item.isActive,
						[styles.itemDisabled]: item.isDisabled,
					},
				)

				return (
					<li key={key} onClick={item.onClick} className={itemClasses}>
						{item.icon && (
							<Flex isCentered={true} className={styles.resultList__icon}>
								<Icon size={18} name={item.icon} />
							</Flex>
						)}
						<Flex isColumn={true} gap={1}>
							<Text
								type="small"
								fontWeight="medium"
								color="dark-gray"
								lineClamp={1}
							>
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
