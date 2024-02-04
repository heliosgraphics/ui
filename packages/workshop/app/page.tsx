"use client"

import dynamic from "next/dynamic"
import ColorGrid from "./components/ColorGrid"
import Buttons from "./components/Buttons"
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
} from "@heliosgraphics/components"
import Icons from "./components/Icons"
import Textarea from "./components/Textarea"
import Form from "./components/Form"
import Checkbox from "./components/Checkbox"
import Dialog from "./components/Dialog"
import Radio from "./components/Radio"
import Confirm from "./components/Confirm"
import Input from "./components/Input"
import Select from "./components/Select"
import ExamplesAlert from "./components/ExamplesAlert"
import DebugSelector from "./components/DebugSelector"
import Markdowns from "./components/Markdowns"
import { IntentProvider } from "./contexts/IntentContext"
import ExamplesToggle from "./components/ExamplesToggle"
import ExamplesButtonGroup from "./components/ExamplesButtonGroup"
import IntentSelector from "./components/IntentSelector"
import ExamplesBreadcrumb from "./components/ExamplesBreadcrumb"
import ExamplesHeading from "./components/ExamplesHeading"
import ExamplesText from "./components/ExamplesText"

const resultListItems: Array<ResultItem> = [
	{ name: "First item", icon: "arrow-left" },
	{ name: "Second item", icon: "arrow-left" },
]

const pieItems: Array<PieItem> = []

const ThemeSwitcher = dynamic(
	() => import("@heliosgraphics/components/components/ThemeSwitcher"),
	{
		ssr: false,
		loading: () => <ThemeSwitcherLoading />,
	},
)

export default function Home() {
	return (
		<IntentProvider>
			<main>
				<Flex isColumn={true} gap={16} padding={16}>
					<Flex isColumn={true} gap={8}>
						<Heading level={1} className="flex flex-y-center gap-4">
							<a href="https://helios.graphics">
								<Icon size={24} name="asterisk" />
							</a>
							<span>Helios Interface</span>
						</Heading>
						<Flex gap={4} isColumn={true}>
							<ThemeSwitcher />
							<DebugSelector />
						</Flex>
						<IntentSelector />
						<Separator isLight={true} />
					</Flex>

					<Flex isColumn={true} gap={4}>
						<Details title="Alert">
							<ExamplesAlert />
						</Details>

						<Details title="Breadcrumb">
							<ExamplesBreadcrumb />
						</Details>

						<Details title="Button">
							<Buttons />
						</Details>

						<Details title="ButtonGroup">
							<ExamplesButtonGroup />
						</Details>

						<Details title="Colors">
							<Flex isColumn={true} gap={8}>
								<ColorGrid color="aqua" />
								<ColorGrid color="blue" />
								<ColorGrid color="gray" />
								<ColorGrid color="green" />
								<ColorGrid color="orange" />
								<ColorGrid color="pink" />
								<ColorGrid color="purple" />
								<ColorGrid color="red" />
								<ColorGrid color="yellow" />
							</Flex>
						</Details>

						<Details title="Checkbox">
							<Checkbox />
						</Details>

						<Details title="Column">
							<Column width={480}>
								<Text type="paragraph">Hello</Text>
							</Column>
						</Details>

						<Details title="Confirm">
							<Confirm />
						</Details>

						<Details title="Dialog">
							<Dialog />
						</Details>

						<Details title="Donut">
							<Donut size={48} color="red" percentage={56} />
						</Details>

						<Details title="Dot">
							<Dot size={8} color="red" />
						</Details>

						<Details title="Dropdown">
							<Dropdown items={resultListItems}>
								<ButtonGroup>
									<Button value="Dropdown" intent="silent" />
								</ButtonGroup>
							</Dropdown>
						</Details>

						<Details title="Flex">
							<Flex isColumn={true} gap={8}>
								<Text type="small">Hello</Text>
								<Text type="small">Word</Text>
							</Flex>
						</Details>

						<Details title="Form">
							<Form />
						</Details>

						<Details title="Grid">
							<Grid columns={2}>
								<Text type="small">01</Text>
								<Text type="small">02</Text>
								<Text type="small">03</Text>
								<Text type="small">04</Text>
							</Grid>
						</Details>

						<Details title="Heading">
							<ExamplesHeading />
						</Details>

						<Details title="Icon">
							<Icons />
						</Details>

						<Details title="Input">
							<Input />
						</Details>

						<Details title="Loading">
							<Loading size={10} />
							<Loading size={20} />
							<Loading size={40} />
						</Details>

						<Details title="Markdown">
							<Markdowns />
						</Details>

						<Details title="Masonry">
							<Masonry>
								<Text type="small">01</Text>
								<Text type="small">02</Text>
								<Text type="small">03</Text>
								<Text type="small">04</Text>
								<Text type="small">05</Text>
								<Text type="small">06</Text>
							</Masonry>
						</Details>

						<Details title="Pie">
							<Pie size={20} data={pieItems} />
						</Details>

						<Details title="Pill">
							<Pill color="red" label="Pill" />
						</Details>

						<Details title="Progress">
							<Progress max={100} value={24} />
						</Details>

						<Details title="Radio">
							<Radio />
						</Details>

						<Details title="ResultList">
							<ResultList items={resultListItems} />
						</Details>

						<Details title="Select">
							<Select />
						</Details>

						<Details title="Shimmer">
							<Shimmer height={20} width={120} />
						</Details>

						<Details title="Slider">
							<Slider />
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
							<ExamplesText />
						</Details>

						<Details title="Textarea">
							<Textarea />
						</Details>

						<Details title="Tile">
							<Tile color="red" icon="arrow-left" size={32} />
						</Details>

						<Details title="Timestamp">
							<Timestamp />
						</Details>

						<Details title="Toggle">
							<ExamplesToggle />
						</Details>

						<Details title="Upload">
							<Upload />
						</Details>
					</Flex>
				</Flex>
			</main>
		</IntentProvider>
	)
}
