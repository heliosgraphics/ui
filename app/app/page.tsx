"use client"

import dynamic from "next/dynamic"
import ColorGrid from "./components/ColorGrid"
import Buttons from "./components/Buttons"
import {
	type BreadCrumbItem,
	type ResultItem,
	type PieItem,
	Alert,
	Breadcrumb,
	Button,
	ButtonGroup,
	Category,
	// Checkbox,
	Column,
	// Confirm,
	Details,
	// Dialog,
	Donut,
	Dot,
	Dropdown,
	Error,
	Flex,
	// Form,
	Grid,
	Heading,
	// Icon,
	// Input,
	Layout,
	Loading,
	Markdown,
	Masonry,
	Pie,
	Pill,
	Progress,
	// Radio,
	ResultList,
	// Select,
	Separator,
	// Setup,
	Shimmer,
	Slider,
	Spacer,
	Table,
	Tabs,
	Text,
	// Textarea,
	// ThemeSwitcher,
	ThemeSwitcherLoading,
	Tile,
	Timestamp,
	// Toggle,
	Upload,
} from "../../src"
import Icons from "./components/Icons"
import Textarea from "./components/Textarea"
import Toggle from "./components/Toggle"
import Form from "./components/Form"
import Checkbox from "./components/Checkbox"
import Dialog from "./components/Dialog"
import Radio from "./components/Radio"
import Confirm from "./components/Confirm"
import Input from "./components/Input"
import Select from "./components/Select"

const INTRO_MD: string = `# Donec vestibulum
## Nam porta, orci porta commodo
### Pellentesque eu est luctus
#### Nullam pulvinar convallis
##### Luctus sollicitudin ipsum
###### Aliquam erat volutpat

Praesent tincidunt elit ante, <a href="">sit amet aliquet nunc imperdiet</a> nec. In pulvinar volutpat lacus sed semper. Aliquam vulputate risus at lacinia aliquam.

|before|after|
|--|--|
|001|002|

Mauris efficitur aliquam risus, id tempus quam pharetra vitae.

\`\`\`tsx
const ThemeSwitcher = dynamic(
	() => import("../../src/components/ThemeSwitcher"),
	{
		ssr: false,
		loading: () => <ThemeSwitcherLoading />,
	},
)
\`\`\`

Integer leo est, lobortis at nulla at, tempus dignissim velit. ~~Suspendisse dignissim~~, ipsum sit amet rhoncus tristique, urna risus accumsan leo, ut \`auctor augue function() {}\` sit amet metus. Proin purus risus, tincidunt a est a, porttitor dignissim erat. Sed vitae varius urna, sed <mark>mark tincidunt neque</mark>. Aenean egestas molestie ante nec pellentesque. Donec massa diam, molestie ac gravida at, commodo et diam.

---

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean varius non magna dapibus pharetra. Pellentesque eget sapien sit amet massa dapibus lacinia. Integer auctor pulvinar erat, non pharetra felis fermentum ac.

> Proin purus risus, tincidunt a est a, porttitor dignissim erat. Sed vitae varius urna, sed tincidunt neque. Aenean egestas molestie ante nec pellentesque. Donec massa diam, molestie ac gravida at, commodo et diam.

<small>
Phasellus tristique tortor sed malesuada aliquam. Quisque cursus sodales velit, eget condimentum erat accumsan a. Fusce feugiat felis eros, in dignissim arcu imperdiet non. Fusce tincidunt eu dolor vitae pulvinar. Quisque dignissim nibh erat, eu iaculis est maximus sit amet. Vestibulum id lobortis nisi, a maximus leo. Etiam mattis rhoncus felis id condimentum. Vivamus ut nisi non nunc sollicitudin consectetur at id nisl. Vivamus quis turpis a leo pellentesque interdum et id diam. Fusce egestas diam orci, ut volutpat diam semper nec. Pellentesque accumsan consequat erat, id mattis mi ultrices sit amet.
</small>
`

const breadCrumbItems: Array<BreadCrumbItem> = [
	{ name: "Index", href: "/" },
	{ name: "Books", href: "/consequat" },
	{
		name: "Maecenas pellentesque",
		href: "/consequat/maecenas-pellentesque",
		isActive: true,
	},
]

const resultListItems: Array<ResultItem> = [
	{ name: "First item", icon: "arrow-left" },
	{ name: "Second item", icon: "arrow-left" },
]

const pieItems: Array<PieItem> = []

const ThemeSwitcher = dynamic(
	() => import("../../src/components/ThemeSwitcher"),
	{
		ssr: false,
		loading: () => <ThemeSwitcherLoading />,
	},
)

export default function Home() {
	const onClose = () => console.log(0)

	return (
		<Layout>
			<main className="debugx">
				<Flex isColumn={true} gap={16} padding={16}>
					<Flex isColumn={true} gap={8}>
						<Heading level={1}>Thebe Components</Heading>
						<Text type="tiny" fontFamily="mono">
							from <a href="https://helios.graphics">Helios Graphics</a>
						</Text>

						<Text type="paragraph">
							This is both the workshop and the official NextJS example. For
							documentation access, please visit{" "}
							<a href="https://thebe.dev">Thebe</a>.
						</Text>
						<Text type="tiny" fontFamily="mono">
							01. add @heliosgraphics/fractures
							<br />
							02. add @heliosgraphics/components
						</Text>
						<ThemeSwitcher />
					</Flex>

					<Flex isColumn={true} gap={4}>
						<Details title="Alert">
							<Flex isColumn={true} gap={12}>
								<Text type="paragraph">Compact</Text>

								<Alert intent="advise" icon="info" onClose={onClose}>
									Advise, perferendis unde cupiditate tempore magnam corrupti
									quidem.
								</Alert>
								<Alert intent="automation" icon="info" onClose={onClose}>
									Advise, perferendis unde cupiditate tempore magnam corrupti
									quidem.
								</Alert>
								<Alert intent="confirmation" icon="info" onClose={onClose}>
									Confirmation? Perferendis unde cupiditate tempore magnam
									corrupti quidem.
								</Alert>
								<Alert intent="error" icon="info" onClose={onClose}>
									Error, lorem ipsum dolor sit amet consectetur adipisicing
									elit. Perferendis unde cupiditate <a>aspernatur autem</a>{" "}
									tempore magnam vitae, quidem. Incidunt facilis aspernatur
									corrupti doloremque?
								</Alert>
								<Alert intent="highlight" icon="info" onClose={onClose}>
									Highlight, lorem ipsum dolor sit amet consectetur adipisicing
									elit. Perferendis unde cupiditate <a>aspernatur autem</a>{" "}
									tempore magnam.
								</Alert>
								<Alert intent="question" icon="info" onClose={onClose}>
									Question, lorem ipsum dolor sit amet consectetur adipisicing
									elit. Perferendis unde cupiditate <a>aspernatur autem</a>{" "}
									tempore magnam vitae.
								</Alert>
								<Alert intent="success" icon="info" onClose={onClose}>
									Success, lorem ipsum dolor sit amet consectetur adipisicing
									elit. Perferendis unde cupiditate <a>aspernatur autem</a>{" "}
									tempore magnam vitae.
								</Alert>
								<Alert intent="silent" icon="info" onClose={onClose}>
									Success, lorem ipsum dolor sit amet consectetur adipisicing
									elit. Perferendis unde cupiditate <a>aspernatur autem</a>{" "}
									tempore magnam vitae.
								</Alert>
								<Alert intent="warning" icon="info" onClose={onClose}>
									Warning, lorem ipsum dolor sit amet cons?
								</Alert>

								<Text type="paragraph">Title</Text>

								<Alert
									title="Vitae, assumenda aliquid"
									intent="advise"
									icon="info"
									onClose={onClose}
								>
									Cupiditate <a>aspernatur autem</a> tempore magnam vitae,
									assumenda aliquid ab illo necessitatibus velit temporibus
									corrupti quidem. Incidunt facilis aspernatur corrupti
									doloremque?
								</Alert>
								<Alert
									title="Vitae, assumenda aliquid"
									intent="confirmation"
									icon="info"
									onClose={onClose}
								>
									Cupiditate <a>aspernatur autem</a> tempore magnam vitae,
									assumenda aliquid ab illo necessitatibus velit temporibus
									corrupti quidem. Incidunt facilis aspernatur corrupti
									doloremque?
								</Alert>
								<Alert
									title="Vitae, assumenda aliquid"
									intent="error"
									icon="info"
									onClose={onClose}
								>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Perferendis unde cupiditate <a>aspernatur autem</a> tempore
									magnam vitae, assumenda aliquid ab illo necessitatibus velit
									temporibus corrupti quidem. Incidunt facilis aspernatur
									corrupti doloremque?
								</Alert>
								<Alert
									title="Vitae, assumenda aliquid"
									intent="highlight"
									icon="info"
									onClose={onClose}
								>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Perferendis unde cupiditate <a>aspernatur autem</a> tempore
									magnam vitae, assumenda aliquid ab illo necessitatibus velit
									temporibus corrupti quidem. Incidunt facilis aspernatur
									corrupti doloremque?
								</Alert>
								<Alert
									title="Vitae, assumenda aliquid"
									intent="question"
									icon="info"
									onClose={onClose}
								>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Perferendis unde cupiditate <a>aspernatur autem</a> tempore
									magnam vitae, assumenda aliquid ab illo necessitatibus velit
									temporibus corrupti quidem. Incidunt facilis aspernatur
									corrupti doloremque?
								</Alert>

								<Alert
									title="Vitae, assumenda aliquid"
									intent="success"
									icon="info"
									onClose={onClose}
								>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Perferendis unde cupiditate <a>aspernatur autem</a> tempore
									magnam vitae, assumenda aliquid ab illo necessitatibus velit
									temporibus corrupti quidem. Incidunt facilis aspernatur
									corrupti doloremque?
								</Alert>
								<Alert
									title="Random Warning"
									intent="warning"
									icon="info"
									onClose={onClose}
								>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Perferendis unde cupiditate <a>aspernatur autem</a> tempore
									magnam vitae, assumenda aliquid ab illo necessitatibus velit
									temporibus corrupti quidem. Incidunt facilis aspernatur
									corrupti doloremque?
								</Alert>
							</Flex>
						</Details>

						<Details title="Breadcrumb">
							<Breadcrumb items={breadCrumbItems} />
						</Details>

						<Details title="Button" open={true}>
							<Buttons />
						</Details>

						<Details title="ButtonGroup">
							<ButtonGroup>
								<Button intent="silent" value="Cancel" />
								<Button intent="advise" value="Start" />
							</ButtonGroup>
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

						<Details title="Category">
							<Category name="Category" color="purple" />
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

						<Details title="Error">
							<Error />
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
							<Markdown text={INTRO_MD} />
							<Separator />
							<Text type="small" className="text-secondary">
								Mauris fermentum eros sit amet efficitur malesuada. Nam tempus
								placerat tellus, eu sit amet. Nunc viverra risus nibh, eu
								aliquet nulla tristique at. Duis auctor lectus est, id
								pellentesque felis malesuada ac. Ut sollicitudin vestibulum
								nibh, vitae suscipit justo condimentum et.
							</Text>
							<Text type="tiny" className="text-deemphasized">
								Vivamus euismod non arcu vel euismod. Nullam pharetra egestas
								metus suscipit tincidunt. Ut porttitor tempus velit, vitae
								condimentum. Morbi ultrices vel ante sed fringilla. Vivamus non
								odio ornare ex finibus mattis. Mauris dictum gravida orci,
								maximus hendrerit risus luctus at. Nam ultricies vel orci sed
								posuere. Nam sit amet accumsan turpis, sed lacinia nibh. Nullam
								imperdiet mauris ac mauris bibendum ornare. Pellentesque vel
								ipsum ante. Nam facilisis enim tellus, sit amet tristique massa
								fermentum vel. Vivamus vitae tincidunt ex, id porta lorem.
							</Text>
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
							<Table>
								<tr>
									<td>
										<Text type="div">Hello 01</Text>
										<Text type="div">Hello 02</Text>
									</td>
								</tr>
							</Table>
						</Details>

						<Details title="Tabs">
							<Tabs items={[]} sections={[]} />
						</Details>

						<Details title="Text">
							<Text type="paragraph">Hello World</Text>
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

						<Details title="Timestamp">
							<Timestamp />
						</Details>

						<Details title="Toggle">
							<Toggle />
						</Details>

						<Details title="Upload">
							<Upload />
						</Details>
					</Flex>
				</Flex>
			</main>
		</Layout>
	)
}
