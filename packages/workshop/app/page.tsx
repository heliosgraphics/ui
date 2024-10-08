"use client"

import {
	Button,
	ButtonGroup,
	COMPONENTS,
	Content,
	Donut,
	Flex,
	Heading,
	Icon,
	Masonry,
	Separator,
	Text,
} from "@heliosgraphics/ui"
import uiPackage from "@heliosgraphics/ui/package.json"
import { DashboardCard } from "./_components/DashboardCard"
import { WorkshopContext } from "./_contexts/WorkshopContext"
import { useContext } from "react"
import { Cover } from "./_components/Cover"
import { DebugSelector } from "./_components/DebugSelector"

export default function RootPage() {
	const { hasPadding, hasCover } = useContext(WorkshopContext)

	const componentCount: number = Object.keys(COMPONENTS).length
	const stableComponentCount: number = Object.values(COMPONENTS).filter((c) => c._status === "stable").length
	const experimentalComponentCount: number = Object.values(COMPONENTS).filter((c) => c._status === "experimental").length

	const stableComponentsPercent: number = componentCount > 0 ? Math.floor((stableComponentCount / componentCount) * 100) : 0
	const experimentalComponentsPercent: number =
		componentCount > 0 ? Math.floor((experimentalComponentCount / componentCount) * 100) : 0

	const categoryCount: number = new Set(Object.values(COMPONENTS).map(({ _type }) => _type)).size

	return (
		<Content width={1200} padding={hasPadding ? 2 : 0}>
			<Masonry brakepoints={[760, 1280, 1280]} gap={[1, 1, 1]} columns={[1, 2, 3]}>
				<DashboardCard isColumn={true} gap={4}>
					<Heading level={1}>Helios Interface</Heading>
				</DashboardCard>
				<DashboardCard isColumn={false}>
					<Icon icon="nazar" size={48} />
					<Icon icon="bullseye" size={48} />
					<Icon icon="eye-disabled" size={48} emphasis="tertiary" />
				</DashboardCard>
				<DashboardCard gap={4}>
					<ButtonGroup>
						<a href="https://github.com/heliosgraphics/ui" tabIndex={-1}>
							<Button intent="silent" value="Code" icon="x-github" />
						</a>
					</ButtonGroup>
					<Text type="small" emphasis="secondary">
						Visual system for React to maintain graphical integrity.
					</Text>
					<Text type="tiny" fontFamily="mono" emphasis="tertiary">
						Development Preview &middot; <a href="https://github.com/heliosgraphics/ui/issues">Leave Feedback</a>
					</Text>
				</DashboardCard>
				{hasCover && (
					<DashboardCard noPadding={true}>
						<Cover />
					</DashboardCard>
				)}
				<DashboardCard>
					<Flex gap={12} isYCentered={true}>
						<Flex isColumn={true} className="wp-50">
							<Text type="div" fontWeight="semibold">
								{componentCount}
							</Text>
							<Text type="small" emphasis="secondary">
								Components
							</Text>
						</Flex>
						<Separator isVertical={true} height={32} isLight={true} />
						<Flex isColumn={true} className="wp-50">
							<Text type="div" fontWeight="semibold">
								{categoryCount}
							</Text>
							<Text type="small" emphasis="secondary">
								Categories
							</Text>
						</Flex>
					</Flex>
				</DashboardCard>
				<DashboardCard>
					<Flex gap={12} isYCentered={true}>
						<Flex gap={6} className="wp-50" isYCentered={true}>
							<Donut color="gray" percentage={stableComponentsPercent} size={48}>
								<Text type="tiny" emphasis="tertiary">
									{stableComponentCount}
								</Text>
							</Donut>
							<Flex isColumn={true}>
								<Text type="div" fontWeight="semibold">
									{stableComponentsPercent}%
								</Text>
								<Text type="tiny" emphasis="tertiary">
									Stable
								</Text>
							</Flex>
						</Flex>
						<Separator isVertical={true} height={32} isLight={true} />
						<Flex gap={6} className="wp-50" isYCentered={true}>
							<Donut color="gray" percentage={experimentalComponentsPercent} size={48}>
								<Icon icon="bolt" size={16} emphasis="tertiary" />
							</Donut>
							<Flex isColumn={true}>
								<Text type="div" fontWeight="semibold">
									{experimentalComponentsPercent}%
								</Text>
								<Text type="tiny" emphasis="tertiary">
									Experimental
								</Text>
							</Flex>
						</Flex>
					</Flex>
				</DashboardCard>
				<DashboardCard>
					<ButtonGroup>
						<a href="/get-started" tabIndex={-1}>
							<Button intent="advise" value="Start Building" icon="eye" />
						</a>
					</ButtonGroup>
					<Text type="small" fontFamily="mono" emphasis="secondary">
						<span className="non-selectable">pnpm i </span>@heliosgraphics/ui
						<span className="non-selectable">@{uiPackage.version}</span>
					</Text>
				</DashboardCard>
				<DashboardCard>
					<DebugSelector />
				</DashboardCard>
			</Masonry>
		</Content>
	)
}
