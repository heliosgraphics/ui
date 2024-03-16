import { FC } from "react"
import styles from "./MenuSeparator.module.css"
import { Flex, Text, Separator } from "../.."
import type { MenuSeparatorProps } from "./MenuSeparator.types"

const MenuSeparator: FC<MenuSeparatorProps> = ({ category }) => {
	return (
		<Flex
			className={category ? styles.menuSeparatorCategory : undefined}
			isColumn={true}
			isXCentered={true}
			paddingY={2}
			data-component="MenuSeparator"
		>
			{category ? (
				<Text className={styles.menuSeparatorCategory} type="tiny" emphasis="secondary" fontWeight="medium">
					{category}
				</Text>
			) : (
				<Separator isLight={true} />
			)}
		</Flex>
	)
}

export { MenuSeparator }
