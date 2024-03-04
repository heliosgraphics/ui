"use client"

import { Content, Details, Flex, Text, Heading, Separator } from "@heliosgraphics/ui"
import { WorkshopProvider } from "./contexts/WorkshopContext"
import DebugSelector from "./components/DebugSelector"
import WorkshopControls from "./components/WorkshopControls"
import WorkshopNavigation from "./components/WorkshopNavigation"
import WorkshopMenu from "./components/WorkshopMenu"
import WorkshopContent from "./components/WorkshopContent"
import uiPackage from "@heliosgraphics/ui/package.json"

export default function Home({ children }) {
	return (
		<WorkshopProvider>
			<WorkshopNavigation />
			<WorkshopMenu />
			<WorkshopContent>
				<Flex
					isColumn={true}
					gap={8}
					padding={[8, 16, 24]}
					withBackground={true}
					// withRadius={["none", "small", "normal"]}
				>
					<Flex isColumn={true}>
						<Flex isBetween={true}>
							<Heading level={0}>UI</Heading>
						</Flex>
						<Text type="paragraph">this is obviously a work in progress&mdash;compile your own:</Text>
						<Flex>
							<Text type="tiny">
								<code>@heliosgraphics/ui</code>
							</Text>
							<Text type="tiny" isNonSelectable={true}>
								<code>@{uiPackage.version}</code>
							</Text>
						</Flex>
					</Flex>
					<Separator isLight={true} />
					<DebugSelector />
					<WorkshopControls />
				</Flex>
			</WorkshopContent>
		</WorkshopProvider>
	)
}
