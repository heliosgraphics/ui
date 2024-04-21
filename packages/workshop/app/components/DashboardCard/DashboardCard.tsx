"use client"

import { Flex } from "@heliosgraphics/ui"
import { useContext, type FC } from "react"
import { WorkshopContext } from "workshop/app/contexts/WorkshopContext"
import type { DashboardCardProps } from "./DashboardCard.types"

export const DashboardCard: FC<DashboardCardProps> = ({ children, noPadding }) => {
	const { hasPadding } = useContext(WorkshopContext)

	const border = hasPadding ? "normal" : undefined
	const padding = hasPadding ? 2 : undefined

	return (
		<Flex padding={padding} className="wp-100">
			<Flex
				isColumn={true}
				gap={8}
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
