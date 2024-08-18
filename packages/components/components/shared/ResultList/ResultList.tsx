import { getClasses } from "@heliosgraphics/utils/classnames"
import { Flex, Icon, Text } from "../../.."
import styles from "./ResultList.module.css"
import type { FC } from "react"
import type { ResultListProps } from "./ResultList.types"

export const ResultList: FC<ResultListProps> = ({ items }) => {
	if (!items?.length) return null

	return (
		<ol className={styles.resultList + " shadow-medium"} data-component="ResultList">
			{items?.map((item, key) => {
				if (item.type === "separator") return <li key={key} className={styles.resultList__separator} />

				const itemClasses: string = getClasses("flex flex-y-center gap-5", styles.item, {
					[styles.itemActive]: item.isActive,
					[styles.itemDisabled]: item.isDisabled,
				})

				return (
					<li key={key} onClick={item.onClick} className={itemClasses}>
						{item.icon && (
							<Flex isCentered={true} className={styles.resultList__icon}>
								<Icon icon={item.icon} size={18} />
							</Flex>
						)}
						<Flex isColumn={true} gap={1}>
							<Text type="small" fontWeight="medium" lineClamp={1}>
								{item.name}
							</Text>
							{!!item.description && (
								<Text type="tiny" fontFamily="sans">
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
