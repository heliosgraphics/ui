import dynamic from "next/dynamic"
import ThemeSwitcherLoading from "../../src/components/ThemeSwitcherLoading"
import ColorGrid from "./components/ColorGrid"
import Buttons from "./components/Buttons"
import {
	Alert,
	Column,
	Details,
	Flex,
	Text,
	Markdown,
	Heading,
	Separator,
	Button,
	ButtonGroup,
} from "../../src"

const INTRO_MD: string = `# Donec vestibulum
## Nam porta, orci porta commodo
### Pellentesque eu est luctus
#### Nullam pulvinar convallis
##### Luctus sollicitudin ipsum
###### Aliquam erat volutpat

Praesent tincidunt elit ante, <a href="">sit amet aliquet nunc imperdiet</a> nec. In pulvinar volutpat lacus sed semper. Aliquam vulputate risus at lacinia aliquam. Mauris efficitur aliquam risus, id tempus quam pharetra vitae.

\`\`\`tsx
const ThemeSwitcher = dynamic(
	() => import("../../src/components/ThemeSwitcher"),
	{
		ssr: false,
		loading: () => <ThemeSwitcherLoading />,
	},
)
\`\`\`

Integer leo est, lobortis at nulla at, tempus dignissim velit. Suspendisse dignissim, ipsum sit amet rhoncus tristique, urna risus accumsan leo, ut \`auctor augue function() {}\` sit amet metus. Proin purus risus, tincidunt a est a, porttitor dignissim erat. Sed vitae varius urna, sed tincidunt neque. Aenean egestas molestie ante nec pellentesque. Donec massa diam, molestie ac gravida at, commodo et diam.

> Proin purus risus, tincidunt a est a, porttitor dignissim erat. Sed vitae varius urna, sed tincidunt neque. Aenean egestas molestie ante nec pellentesque. Donec massa diam, molestie ac gravida at, commodo et diam.

<small>
Phasellus tristique tortor sed malesuada aliquam. Quisque cursus sodales velit, eget condimentum erat accumsan a. Fusce feugiat felis eros, in dignissim arcu imperdiet non. Fusce tincidunt eu dolor vitae pulvinar. Quisque dignissim nibh erat, eu iaculis est maximus sit amet. Vestibulum id lobortis nisi, a maximus leo. Etiam mattis rhoncus felis id condimentum. Vivamus ut nisi non nunc sollicitudin consectetur at id nisl. Vivamus quis turpis a leo pellentesque interdum et id diam. Fusce egestas diam orci, ut volutpat diam semper nec. Pellentesque accumsan consequat erat, id mattis mi ultrices sit amet.
</small>

---



`

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
		<main className="debugx">
			<Flex isColumn={true} gap={16} padding={16}>
				<Flex isColumn={true}>
					<Heading level={1}>Gamen Components</Heading>
					<Text type="tiny" fontFamily="mono">
						from <a href="https://helios.graphics">Helios Graphics</a>
					</Text>
				</Flex>
				<Flex isColumn={true} gap={8}>
					<Flex isColumn={true} gap={2}>
						<Text type="paragraph">
							This is both the workshop and the official NextJS example. For
							documentation access, please visit{" "}
							<a href="https://gamen.earth">Gamen</a>.
						</Text>
						<Text type="tiny" fontFamily="mono">
							01. add @heliosgraphics/fractures
							<br />
							02. add @heliosgraphics/components
						</Text>
					</Flex>
					<ThemeSwitcher />
				</Flex>

				<Flex isColumn={true} gap={4}>
					<Details title="Button" open={true}>
						<Buttons />
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

					<Details title="Markdown">
						<Markdown text={INTRO_MD} />
					</Details>

					<Details title="Alert">
						<Text type="paragraph">Compact</Text>
						<Column isColumn={true} gap={2} width={960}>
							<Alert intent="advise" icon="info" onClose={onClose}>
								Advise, perferendis unde cupiditate tempore magnam corrupti
								quidem.
							</Alert>
							<Alert intent="confirmation" icon="info" onClose={onClose}>
								Confirmation? Perferendis unde cupiditate tempore magnam
								corrupti quidem.
							</Alert>
							<Alert intent="error" icon="info" onClose={onClose}>
								Error, lorem ipsum dolor sit amet consectetur adipisicing elit.
								Perferendis unde cupiditate <a>aspernatur autem</a> tempore
								magnam vitae, quidem. Incidunt facilis aspernatur corrupti
								doloremque?
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
							<Alert intent="warning" icon="info" onClose={onClose}>
								Warning, lorem ipsum dolor sit amet cons?
							</Alert>
						</Column>
						<Text type="paragraph">Title</Text>
						<Column isColumn={true} gap={2} width={960}>
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
								temporibus corrupti quidem. Incidunt facilis aspernatur corrupti
								doloremque?
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
								temporibus corrupti quidem. Incidunt facilis aspernatur corrupti
								doloremque?
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
								temporibus corrupti quidem. Incidunt facilis aspernatur corrupti
								doloremque?
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
								temporibus corrupti quidem. Incidunt facilis aspernatur corrupti
								doloremque?
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
								temporibus corrupti quidem. Incidunt facilis aspernatur corrupti
								doloremque?
							</Alert>
						</Column>
					</Details>
				</Flex>

				<Markdown text={INTRO_MD} />
			</Flex>
		</main>
	)
}
