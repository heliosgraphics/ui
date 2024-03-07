"use client"

import { Flex } from "@heliosgraphics/ui"
import { useContext, type FC } from "react"
import type { PageProps } from "./Page.types"
import { WorkshopContext } from "../../contexts/WorkshopContext"
import { ResponsiveRadiusType } from "@heliosgraphics/ui/components/Flex/Flex.types"

const Page: FC<PageProps> = ({ children }) => {
	const { hasPadding } = useContext(WorkshopContext)
	const pageRadius: ResponsiveRadiusType | undefined = hasPadding ? ["none", "small", "normal"] : undefined

	return (
		<Flex isColumn={true} gap={8} padding={[8, 16, 24]} withBackground={true} withRadius={pageRadius}>
			{children}
		</Flex>
	)
}

export default Page
