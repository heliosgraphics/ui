import { FC } from "react"

import { Flex, Text } from "../.."
import type { MenuCategoryProps } from "./MenuCategory.types"

const MenuCategory: FC<MenuCategoryProps> = ({ category }) => {
	return (
		<Flex isColumn={true} isXCentered={true} paddingX={8} className="pt-6 pb-2" data-component="MenuCategory">
			<Text type="tiny" emphasis="secondary" fontWeight="medium">
				{category}
			</Text>
		</Flex>
	)
}

export default MenuCategory
