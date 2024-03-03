"use client"

import { Content, Details, Flex, Text, Heading, Separator } from "@heliosgraphics/ui"
import { WorkshopProvider } from "./contexts/WorkshopContext"
import DebugSelector from "./components/DebugSelector"
import ExampleAlert from "./components/ExampleAlert"
import ExampleBreadcrumb from "./components/ExampleBreadcrumb"
import ExampleButton from "./components/ExampleButton"
import ExampleButtonGroup from "./components/ExampleButtonGroup"
import ExampleCheckbox from "./components/ExampleCheckbox"
import ExampleColors from "./components/ExampleColors"
import ExampleColumn from "./components/ExampleColumn"
import ExampleConfirm from "./components/ExampleConfirm"
import ExampleDialog from "./components/ExampleDialog"
import ExampleDonut from "./components/ExampleDonut"
import ExampleDot from "./components/ExampleDot"
import ExampleDropdown from "./components/ExampleDropdown"
import ExampleFlex from "./components/ExampleFlex"
import ExampleGrid from "./components/ExampleGrid"
import ExampleHeading from "./components/ExampleHeading"
import ExampleIcon from "./components/ExampleIcon"
import ExampleInput from "./components/ExampleInput"
import ExampleLoading from "./components/ExampleLoading"
import ExampleMarkdown from "./components/ExampleMarkdown"
import ExampleMasonry from "./components/ExampleMasonry"
import ExamplePie from "./components/ExamplePie"
import ExamplePill from "./components/ExamplePill"
import ExampleProgress from "./components/ExampleProgress"
import ExampleRadio from "./components/ExampleRadio"
import ExampleSelect from "./components/ExampleSelect"
import ExampleShimmer from "./components/ExampleShimmer"
import ExampleSlider from "./components/ExampleSlider"
import ExampleSpacer from "./components/ExampleSpacer"
import ExampleTabs from "./components/ExampleTabs"
import ExampleText from "./components/ExampleText"
import ExampleTextarea from "./components/ExampleTextarea"
import ExampleTile from "./components/ExampleTile"
import ExampleTimestamp from "./components/ExampleTimestamp"
import ExampleToggle from "./components/ExampleToggle"
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
