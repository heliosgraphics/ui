"use client"

import { Flex, Text, Heading } from "@heliosgraphics/ui"
import { ResponsiveRadiusType } from "@heliosgraphics/ui/components/Flex/Flex.types"
import { useContext, type FC } from "react"
import { WorkshopContext } from "../../contexts/WorkshopContext"
import type { PageProps } from "./Page.types"

const Page: FC<PageProps> = ({ children, eyebrow, title }) => {
	const { hasPadding } = useContext(WorkshopContext)
	const pageRadius: ResponsiveRadiusType | undefined = hasPadding ? ["none", "small", "normal"] : undefined

	return (
		<Flex
			isColumn={true}
			gap={12}
			padding={[8, 16, 24]}
			withBackground={true}
			withRadius={pageRadius}
			className="relative z-10"
		>
			{title && (
				<Flex isColumn={true}>
					{eyebrow && (
						<Text type="tiny" fontFamily="mono" emphasis="tertiary">
							{eyebrow}
						</Text>
					)}
					<Heading level={eyebrow ? 0 : 1}>{title}</Heading>
				</Flex>
			)}
			{children}
		</Flex>
	)
}

export default Page
