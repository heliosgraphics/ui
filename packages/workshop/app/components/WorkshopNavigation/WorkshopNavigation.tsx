"use client"

import { useContext, type FC } from "react"
import dynamic from "next/dynamic"
import { WorkshopContext } from "../../contexts/WorkshopContext"
import { Flex, NavigationPanelButton, ThemeSwitcherLoading, Text, Navigation } from "@heliosgraphics/ui"

const ThemeSwitcher = dynamic(() => import("@heliosgraphics/ui/components/ThemeSwitcher"), {
	ssr: false,
	loading: () => <ThemeSwitcherLoading />,
})

const WorkshopNavigation: FC = () => {
	const { hasHeader, hasMenu } = useContext(WorkshopContext)

	return (
		hasHeader && (
			<Navigation withGlass={true} isYCentered={true} gap={8} isBetween={true}>
				<Flex isYCentered={true} gap={8}>
					{hasMenu && <NavigationPanelButton />}

					<Flex gap={4} isYCentered={true}>
						<a href="https://ui.helios.graphics">
							<img src="/emblem.svg" className="flex w-16 h-16" />
						</a>
						<Flex isColumn={true}>
							<Text type="small" fontWeight="semibold">
								Helios UI
							</Text>
						</Flex>
					</Flex>
				</Flex>
				<ThemeSwitcher />
			</Navigation>
		)
	)
}

export default WorkshopNavigation