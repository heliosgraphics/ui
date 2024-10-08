"use client"

import { Flex, Pill, Content, Heading } from "@heliosgraphics/ui"
import { useContext, type FC } from "react"
import { WorkshopContext } from "workshop/app/_contexts/WorkshopContext"
import { Cover } from "../Cover"
import { type ResponsiveRadiusType } from "@heliosgraphics/ui"
import type { PageProps } from "./Page.types"

export const Page: FC<PageProps> = ({ children, labelText, labelColor, breadcrumb, disabledPadding, title }) => {
	const { hasPadding } = useContext(WorkshopContext)
	const pageRadius: ResponsiveRadiusType | undefined = hasPadding ? ["none", "small", "normal"] : undefined

	return (
		<Content width={960} isColumnCentered={hasPadding} gap="px" padding={hasPadding ? [0, 8, 12] : undefined}>
			<Cover />
			<Flex
				isColumn={true}
				gap={disabledPadding ? 0 : 16}
				padding={disabledPadding ? 0 : [8, 16, 24]}
				withBackground={true}
				withRadius={pageRadius}
				className="relative z-10"
			>
				{title && (
					<Flex isColumn={true} padding={disabledPadding ? 16 : 0}>
						<Flex isYCentered={true} gap={4} isBetween={true}>
							{breadcrumb}
							{labelText && labelColor && (
								<Flex>
									<Pill label={labelText} color={labelColor} size="tiny" isMono={true} />
								</Flex>
							)}
						</Flex>
						<Heading level={0}>{title}</Heading>
					</Flex>
				)}
				{children}
			</Flex>
		</Content>
	)
}
