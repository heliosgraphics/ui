"use client"

import { useContext, type FC } from "react"
import dynamic from "next/dynamic"
import { WorkshopContext } from "../../contexts/WorkshopContext"
import { Flex, ThemeSwitcherLoading, Text, Navigation, Icon, Separator } from "@heliosgraphics/ui"

const ThemeSwitcher = dynamic(() => import("@heliosgraphics/ui/components/ThemeSwitcher"), {
	ssr: false,
	loading: () => <ThemeSwitcherLoading />,
})

const WorkshopHeader: FC = () => {
	const { hasHeader } = useContext(WorkshopContext)

	return (
		hasHeader && (
			<Navigation height={64} withGlass={true} isYCentered={true} gap={8} isBetween={true}>
				<Flex isYCentered={true} gap={8}>
					<a href="https://ui.helios.graphics">
						<Icon size={36} name="eye" />
					</a>
					<Separator isVertical={true} height={32} isTransparent={true} />
					<Flex isColumn={true}>
						<Text type="small" fontWeight="semibold">
							UI
						</Text>
						<Text type="tiny" emphasis="tertiary">
							from <a href="https://helios.graphics">Helios</a>
						</Text>
					</Flex>
				</Flex>
				<ThemeSwitcher />
			</Navigation>
		)
	)
}

export default WorkshopHeader
