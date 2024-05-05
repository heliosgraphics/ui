"use client"

import {
	Button,
	Content,
	Donut,
	ButtonGroup,
	Masonry,
	Icon,
	Flex,
	Text,
	Separator,
	Clock,
	Grid,
	Heading,
	Pill,
	COMPONENTS,
} from "@heliosgraphics/ui"
import DebugSelector from "./components/DebugSelector"
import Cover from "./components/Cover"
import { useContext } from "react"
import uiPackage from "@heliosgraphics/ui/package.json"
import { WorkshopContext } from "./contexts/WorkshopContext"
import { DashboardCard } from "./components/DashboardCard"

export default function Home({}) {
	const { hasPadding } = useContext(WorkshopContext)

	const componentCount: number = Object.keys(COMPONENTS).length
	const stableComponentCount: number = Object.values(COMPONENTS).filter((c) => c._status === "stable").length
	const experimentalComponentCount: number = Object.values(COMPONENTS).filter(
		(c) => c._status === "experimental",
	).length

	const stableComponentsPercent: number =
		componentCount > 0 ? Math.floor((stableComponentCount / componentCount) * 100) : 0
	const experimentalComponentsPercent: number =
		componentCount > 0 ? Math.floor((experimentalComponentCount / componentCount) * 100) : 0

	return (
		<Content width={1200} padding={hasPadding ? 2 : 0}>
			<Masonry brakepoints={[760, 1280, 1280]} gap={[1, 1, 1]} columns={[1, 2, 3]}>
				<DashboardCard isColumn={false}>
					<Heading level={1}>Helios UI</Heading>
				</DashboardCard>
				<DashboardCard isColumn={true}>
					<Text type="paragraph">
						Baseline visual system documenting our design and experience standards. Intentional and always evolving.
					</Text>
				</DashboardCard>
				<DashboardCard isColumn={false}>
					<Icon icon="nazar" size={48} />
					<Icon icon="bullseye" size={48} />
					<Icon icon="eye-disabled" size={48} emphasis="tertiary" />
				</DashboardCard>
				<DashboardCard>
					<ButtonGroup>
						<a href="https://github.com/heliosgraphics/ui" tabIndex={-1}>
							<Button intent="silent" value="Code" icon="x-github" />
						</a>
					</ButtonGroup>
					<Text type="tiny" fontFamily="mono" emphasis="tertiary">
						Development Preview &middot; <a href="https://github.com/heliosgraphics/ui/issues">Leave Feedback</a>
					</Text>
				</DashboardCard>
				<DashboardCard noPadding={true}>
					<Cover />
				</DashboardCard>
				<DashboardCard>
					<Flex gap={8}>
						<Flex isColumn={true}>
							<Text type="div" fontWeight="semibold">
								{componentCount}
							</Text>
							<Text type="small" emphasis="secondary">
								Components
							</Text>
						</Flex>
					</Flex>
					<Separator isLight={true} />
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
					<Clock />
				</DashboardCard>
				<DashboardCard>
					<Text type="small" emphasis="secondary">
						Typescript components in React as a Module.
					</Text>
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
