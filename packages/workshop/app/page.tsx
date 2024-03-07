import { Flex, Text, Heading, Separator } from "@heliosgraphics/ui"
import DebugSelector from "./components/DebugSelector"
import WorkshopControls from "./components/WorkshopControls"
import uiPackage from "@heliosgraphics/ui/package.json"

export default function Home({}) {
	return (
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
	)
}
