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

	const stableComponentsPercent: number = Math.floor((componentCount / 100) * stableComponentCount)
	const experimentalComponentsPercent: number = Math.floor((componentCount / 100) * experimentalComponentCount)

	return (
		<Content width={1200} padding={hasPadding ? 2 : 0}>
			<Masonry brakepoints={[760, 1280, 1280]} gap={[1, 1, 1]} columns={[1, 2, 3]}>
				<DashboardCard>
					<Heading level={0}>Helios UI</Heading>
				</DashboardCard>
				<DashboardCard>
					<Text type="small" fontFamily="mono" emphasis="secondary">
						@heliosgraphics/ui<span className="non-selectable">@{uiPackage.version}</span>
						<br />
						<span className="non-selectable">Pre-Release</span>
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
								{/* <Icon icon="asterisk" size={16} emphasis="tertiary" /> */}
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
							<Donut color="pink" percentage={experimentalComponentsPercent} size={48}>
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
					<Text type="paragraph">
						Baseline design system documenting our visual and experience standards. Always evolving, intentional and
						opinionated.
					</Text>
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
						<a href="https://github.com/heliosgraphics/ui" tabIndex={-1}>
							<Button intent="silent" value="Contribute" icon="x-github" />
						</a>
					</ButtonGroup>
				</DashboardCard>
				<DashboardCard>
					<DebugSelector />
				</DashboardCard>
			</Masonry>
		</Content>
	)
}
