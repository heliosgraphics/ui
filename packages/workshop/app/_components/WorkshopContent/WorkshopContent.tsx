"use client"

import { useContext, type FC } from "react"
import { WorkshopContext } from "workshop/app/_contexts/WorkshopContext"
import { Content } from "@heliosgraphics/ui"
import type { WorkshopContentProps } from "./WorkshopContent.types"

export const WorkshopContent: FC<WorkshopContentProps> = ({ children }) => {
	const { hasPadding } = useContext(WorkshopContext)

	return (
		<Content width={960} isColumnCentered={hasPadding} gap="px" padding={hasPadding ? [0, 8, 12] : undefined}>
			{children}
		</Content>
	)
}
