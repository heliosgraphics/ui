"use client"

import {
	type ResultItem,
	type PieItem,
	Button,
	ButtonGroup,
	Column,
	Details,
	Donut,
	Dot,
	Dropdown,
	Flex,
	Grid,
	Heading,
	Icon,
	Loading,
	Masonry,
	Pie,
	Pill,
	Progress,
	ResultList,
	Separator,
	Shimmer,
	Slider,
	Spacer,
	Table,
	Tabs,
	Text,
	ThemeSwitcherLoading,
	Tile,
	Timestamp,
	Upload,
} from "@heliosgraphics/ui"
import { IntentProvider } from "./contexts/IntentContext"
import { ColorProvider } from "./contexts/ColorContext"
import DebugSelector from "./components/DebugSelector"
import dynamic from "next/dynamic"
import ExampleAlert from "./components/ExampleAlert"
import ExampleBreadcrumb from "./components/ExampleBreadcrumb"
import ExampleButton from "./components/ExampleButton"
import ExampleButtonGroup from "./components/ExampleButtonGroup"
import ExampleCheckbox from "./components/ExampleCheckbox"
import ExampleColors from "./components/ExampleColors"
import ExampleConfirm from "./components/ExampleConfirm"
import ExampleDialog from "./components/ExampleDialog"
import ExampleForm from "./components/ExampleForm"
import ExampleHeading from "./components/ExampleHeading"
import ExampleIcon from "./components/ExampleIcon"
import ExampleInput from "./components/ExampleInput"
import ExampleMarkdown from "./components/ExampleMarkdown"
import ExampleRadio from "./components/ExampleRadio"
import ExampleSelect from "./components/ExampleSelect"
import ExampleText from "./components/ExampleText"
import ExampleTextarea from "./components/ExampleTextarea"
import ExampleToggle from "./components/ExampleToggle"
import ExampleDonut from "./components/ExampleDonut"
import ExampleDot from "./components/ExampleDot"
import ExampleColumn from "./components/ExampleColumn"
import ExampleDropdown from "./components/ExampleDropdown"
import ExampleFlex from "./components/ExampleFlex"
import ExampleResultList from "./components/ExampleResultList"
import IntentSelector from "./components/IntentSelector"
import ColorSelector from "./components/ColorSelector"
import ExampleGrid from "./components/ExampleGrid"
import ExampleLoading from "./components/ExampleLoading"
import ExampleMasonry from "./components/ExampleMasonry"
import ExamplePie from "./components/ExamplePie"
import ExampleProgress from "./components/ExampleProgress"
import ExampleShimmer from "./components/ExampleShimmer"
import ExampleSlider from "./components/ExampleSlider"

const ThemeSwitcher = dynamic(
	() => import("@heliosgraphics/ui/components/ThemeSwitcher"),
	{
		ssr: false,
		loading: () => <ThemeSwitcherLoading />,
	},
)

export default function Home() {
	return (
		<IntentProvider>
			<ColorProvider>
				<Flex
					isColumn={true}
					gap={8}
					padding={8}
					className="sticky top-0 glass-1 z-10"
				>
					<Flex isColumn={true}>
						<Heading level={1} className="flex flex-y-center gap-4">
							<a href="https://ui.helios.graphics">
								<Icon size={36} name="asterisk" />
							</a>
							<span>Interface</span>
						</Heading>
						<Text type="tiny" fontFamily="mono">
							from{` `}
							<a href="https://helios.graphics">Helios Graphics</a>
						</Text>
					</Flex>
					<Flex gap={8}>
						<ThemeSwitcher />
						<DebugSelector />
					</Flex>
					<Flex gap={8}>
						<IntentSelector />
						<ColorSelector />
					</Flex>
				</Flex>
				<main>
					<Flex isColumn={true} gap={16} padding={8}>
						<Flex isColumn={true} gap={4}>
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

							<Details title="Form">
								<ExampleForm />
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
								<Pill color="red" label="Pill" />
							</Details>

							<Details title="Progress">
								<ExampleProgress />
							</Details>

							<Details title="Radio">
								<ExampleRadio />
							</Details>

							<Details title="ResultList">
								<ExampleResultList />
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
								<Spacer gap={12} />
							</Details>

							<Details title="Table">
								Hydara
								{/* <Table>
								<tr>
									<td>
										<Text type="div">Hello 01</Text>
										<Text type="div">Hello 02</Text>
									</td>
								</tr>
							</Table> */}
							</Details>

							<Details title="Tabs">
								<Tabs items={[]} sections={[]} />
							</Details>

							<Details title="Text">
								<ExampleText />
							</Details>

							<Details title="Textarea">
								<ExampleTextarea />
							</Details>

							<Details title="Tile">
								<Tile color="red" icon="arrow-left" size={32} />
							</Details>

							<Details title="Timestamp">
								<Timestamp />
							</Details>

							<Details title="Toggle">
								<ExampleToggle />
							</Details>

							<Details title="Upload">
								<Upload />
							</Details>
						</Flex>
					</Flex>
				</main>
			</ColorProvider>
		</IntentProvider>
	)
}
