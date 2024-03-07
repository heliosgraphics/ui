"use client"

import { Flex, Heading } from "@heliosgraphics/ui"
import { ResponsiveRadiusType } from "@heliosgraphics/ui/components/Flex/Flex.types"
import { useContext, type FC } from "react"
import { WorkshopContext } from "../../contexts/WorkshopContext"
import type { PageProps } from "./Page.types"

const Page: FC<PageProps> = ({ children, title }) => {
	const { hasPadding } = useContext(WorkshopContext)
	const pageRadius: ResponsiveRadiusType | undefined = hasPadding ? ["none", "small", "normal"] : undefined

	return (
		<Flex isColumn={true} gap={12} padding={[8, 16, 24]} withBackground={true} withRadius={pageRadius}>
			<Heading level={0}>{title}</Heading>
			{children}
		</Flex>
	)
}

export default Page
