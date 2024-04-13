"use client"

import { useContext, type FC } from "react"
import { WorkshopContext } from "../../contexts/WorkshopContext"
import {
	Flex,
	NavigationPanelButton,
	ThemeSwitcherLoading,
	Text,
	Navigation,
	ButtonGroup,
	Button,
} from "@heliosgraphics/ui"
import Link from "next/link"
import dynamic from "next/dynamic"

const ThemeSwitcher = dynamic(
	() => import("@heliosgraphics/ui/components/ThemeSwitcher/ThemeSwitcher").then((mod) => mod.ThemeSwitcher),
	{
		ssr: false,
		loading: () => <ThemeSwitcherLoading isIconOnly={true} size="small" />,
	},
)

const WorkshopNavigation: FC = () => {
	const { hasHeader, hasMenu } = useContext(WorkshopContext)

	return (
		hasHeader && (
			<Navigation withGlass={true} isYCentered={true} gap={8} isBetween={true}>
				<Flex isYCentered={true} gap={8}>
					{hasMenu && <NavigationPanelButton />}
					<Flex gap={4} isYCentered={true}>
						<Link href="/" className="flex">
							<img src="/emblem.svg" style={{ minWidth: "38px", width: "38px", height: "38px" }} alt="Helios UI Logo" />
						</Link>
						<Flex isColumn={true}>
							<Text type="small" fontWeight="semibold">
								Helios UI
							</Text>
						</Flex>
					</Flex>
				</Flex>
				<ButtonGroup>
					<ThemeSwitcher />
					<a href="https://github.com/heliosgraphics/ui" tabIndex={-1}>
						<Button intent="silent" value="GitHub" icon="x-github" size="small" isIconOnly={true} />
					</a>
				</ButtonGroup>
			</Navigation>
		)
	)
}

export default WorkshopNavigation
