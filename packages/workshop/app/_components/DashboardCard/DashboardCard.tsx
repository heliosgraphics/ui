"use client"

import { Flex } from "@heliosgraphics/ui"
import { useContext, type FC } from "react"
import { WorkshopContext } from "workshop/app/_contexts/WorkshopContext"
import type { DashboardCardProps } from "./DashboardCard.types"

export const DashboardCard: FC<DashboardCardProps> = ({ children, gap = 8, noPadding, isColumn = true }) => {
	const { hasPadding } = useContext(WorkshopContext)

	const border = hasPadding ? "normal" : undefined
	const padding = hasPadding ? 2 : undefined

	return (
		<Flex padding={padding} isColumn={isColumn}>
			<Flex
				isColumn={isColumn}
				isYCentered={!isColumn}
				gap={gap}
				elevation={hasPadding ? "small" : undefined}
				withBackground={true}
				withRadius={border}
				padding={noPadding ? 0 : 8}
				className="wp-100"
			>
				{children}
			</Flex>
		</Flex>
	)
}
