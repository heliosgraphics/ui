"use client"

import { Details, Flex, Heading, Icon, Text, ThemeSwitcherLoading } from "@heliosgraphics/ui"
import { WorkshopProvider } from "./contexts/WorkshopContext"
import DebugSelector from "./components/DebugSelector"
import dynamic from "next/dynamic"
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

const ThemeSwitcher = dynamic(() => import("@heliosgraphics/ui/components/ThemeSwitcher"), {
	ssr: false,
	loading: () => <ThemeSwitcherLoading />,
})

export default function Home() {
	return (
		<WorkshopProvider>
			<main>
				<Flex isColumn={true} gap={8} padding={8} className="sticky top-0 glass-1 z-10">
					<Flex isColumn={true}>
						<Heading level={1} className="flex flex-y-center gap-4">
							<a href="https://ui.helios.graphics">
								<Icon size={36} name="eye" />
							</a>
							<span>Interface</span>
						</Heading>
						<Text type="tiny" fontFamily="mono">
							from{` `}
							<a href="https://helios.graphics">Helios</a>
						</Text>
					</Flex>
					<Flex gap={8}>
						<ThemeSwitcher />
						<DebugSelector />
					</Flex>
					<WorkshopControls />
				</Flex>

				<Flex isColumn={true} gap={8} padding={8}>
					<Details title="Alert">
						<ExampleAlert />
					</Details>

					<Details title="Breadcrumb">
						<ExampleBreadcrumb />
					</Details>

					<Details title="Button">
						<ExampleButton />
					</Details>

					<Details title="ButtonGroup">
						<ExampleButtonGroup />
					</Details>

					<Details title="Colors">
						<ExampleColors />
					</Details>

					<Details title="Checkbox">
						<ExampleCheckbox />
					</Details>

					<Details title="Column">
						<ExampleColumn />
					</Details>

					<Details title="Confirm">
						<ExampleConfirm />
					</Details>

					<Details title="Dialog">
						<ExampleDialog />
					</Details>

					<Details title="Donut">
						<ExampleDonut />
					</Details>

					<Details title="Dot">
						<ExampleDot />
					</Details>

					<Details title="Dropdown">
						<ExampleDropdown />
					</Details>

					<Details title="Flex">
						<ExampleFlex />
					</Details>

					<Details title="Grid">
						<ExampleGrid />
					</Details>

					<Details title="Heading">
						<ExampleHeading />
					</Details>

					<Details title="Icon">
						<ExampleIcon />
					</Details>

					<Details title="Input">
						<ExampleInput />
					</Details>

					<Details title="Loading">
						<ExampleLoading />
					</Details>

					<Details title="Markdown">
						<ExampleMarkdown />
					</Details>

					<Details title="Masonry">
						<ExampleMasonry />
					</Details>

					<Details title="Pie">
						<ExamplePie />
					</Details>

					<Details title="Pill">
						<ExamplePill />
					</Details>

					<Details title="Progress">
						<ExampleProgress />
					</Details>

					<Details title="Radio">
						<ExampleRadio />
					</Details>

					<Details title="Select">
						<ExampleSelect />
					</Details>

					<Details title="Shimmer">
						<ExampleShimmer />
					</Details>

					<Details title="Slider">
						<ExampleSlider />
					</Details>

					<Details title="Spacer">
						<ExampleSpacer />
					</Details>

					<Details title="Tabs">
						<ExampleTabs />
					</Details>

					<Details title="Text">
						<ExampleText />
					</Details>

					<Details title="Textarea">
						<ExampleTextarea />
					</Details>

					<Details title="Tile">
						<ExampleTile />
					</Details>

					<Details title="Timestamp">
						<ExampleTimestamp />
					</Details>

					<Details title="Toggle">
						<ExampleToggle />
					</Details>
				</Flex>
			</main>
		</WorkshopProvider>
	)
}
