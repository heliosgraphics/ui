"use client"

import { useState, type FC } from "react"
import { Button, ButtonGroup, Flex, Text } from "../.."
import { getClasses } from "@heliosgraphics/utils"
import styles from "./MenuCategory.module.css"
import type { MenuCategoryProps } from "./MenuCategory.types"

const MenuCategory: FC<MenuCategoryProps> = ({ category, children, isFolder }) => {
	const [isOpen, setOpen] = useState<boolean>(true)
	const onToggle = () => setOpen(!isOpen)

	const menuCategoryClasses = getClasses(styles.menuCategory, {
		[styles.menuCategoryFolder]: isFolder,
	})

	const showHeader: boolean = Boolean(category || isFolder)

	return (
		<Flex isColumn={true} isXCentered={true} data-component="MenuCategory" className={menuCategoryClasses}>
			{showHeader && (
				<Flex
					isBetween={true}
					isYCentered={true}
					gap={4}
					className={styles.menuCategoryTitle}
					onClick={isFolder ? onToggle : undefined}
				>
					<Text type="tiny" emphasis="secondary" fontWeight="medium">
						{category}
					</Text>
					{isFolder && (
						<ButtonGroup>
							<Button
								intent="silent"
								value="Toggle Category"
								size="tiny"
								isIconOnly={true}
								icon={isOpen ? "caret-up" : "caret-down"}
							/>
						</ButtonGroup>
					)}
				</Flex>
			)}
			{isOpen && (
				<Flex isColumn={true} gap={1} className={styles.menuCategoryItems}>
					{children}
				</Flex>
			)}
		</Flex>
	)
}

export { MenuCategory }
