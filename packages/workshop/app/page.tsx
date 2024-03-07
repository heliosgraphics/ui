import { Flex, Text, Separator } from "@heliosgraphics/ui"
import DebugSelector from "./components/DebugSelector"
import WorkshopControls from "./components/WorkshopControls"
import Page from "workshop/app/components/Page"
import uiPackage from "@heliosgraphics/ui/package.json"

export default function Home({}) {
	return (
		<Page title="UI">
			<Flex isColumn={true}>
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
		</Page>
	)
}
