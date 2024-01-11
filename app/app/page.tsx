import dynamic from "next/dynamic"
import ThemeSwitcherLoading from "../../src/components/ThemeSwitcherLoading"
import {
	Alert,
	Column,
	Flex,
	Text,
	Markdown,
	Separator,
	Button,
	ButtonGroup,
} from "../../src"

const INTRO_MD: string = `# Welcome`

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
				<ThemeSwitcher />
				<Separator />
				<Markdown text={INTRO_MD} />
				<Separator />
				<Text type="paragraph">Button</Text>
				<Column isColumn={true} gap={12} width={960}>
					<ButtonGroup>
						<Button intent="advise" value="Advise" />
						<Button intent="confirmation" value="Confirmation" />
						<Button intent="error" value="Error" />
						<Button intent="highlight" value="Highlight" />
						<Button intent="question" value="Question" />
						<Button intent="silent" value="Silent" />
						<Button intent="success" value="Success" />
						<Button intent="warning" value="Warning" />
					</ButtonGroup>
					<ButtonGroup>
						<Button intent="advise" value="Advise" size="small" />
						<Button intent="confirmation" value="Confirmation" size="small" />
						<Button intent="error" value="Error" size="small" />
						<Button intent="highlight" value="Highlight" size="small" />
						<Button intent="question" value="Question" size="small" />
						<Button intent="silent" value="Silent" size="small" />
						<Button intent="success" value="Success" size="small" />
						<Button intent="warning" value="Warning" size="small" />
					</ButtonGroup>
					<ButtonGroup>
						<Button intent="advise" value="Advise" size="tiny" />
						<Button intent="confirmation" value="Confirmation" size="tiny" />
						<Button intent="error" value="Error" size="tiny" />
						<Button intent="highlight" value="Highlight" size="tiny" />
						<Button intent="question" value="Question" size="tiny" />
						<Button intent="silent" value="Silent" size="tiny" />
						<Button intent="success" value="Success" size="tiny" />
						<Button intent="warning" value="Warning" size="tiny" />
					</ButtonGroup>
					<ButtonGroup>
						<Button intent="advise" value="Advise" isDisabled={true} />
						<Button
							intent="confirmation"
							value="Confirmation"
							isDisabled={true}
						/>
						<Button intent="error" value="Error" isDisabled={true} />
						<Button intent="highlight" value="Highlight" isDisabled={true} />
						<Button intent="question" value="Question" isDisabled={true} />
						<Button intent="silent" value="Silent" isDisabled={true} />
						<Button intent="success" value="Success" isDisabled={true} />
						<Button intent="warning" value="Warning" isDisabled={true} />
					</ButtonGroup>
					<ButtonGroup>
						<Button intent="advise" value="Advise" isLoading={true} />
						<Button
							intent="confirmation"
							value="Confirmation"
							isLoading={true}
						/>
						<Button intent="error" value="Error" isLoading={true} />
						<Button intent="highlight" value="Highlight" isLoading={true} />
						<Button intent="question" value="Question" isLoading={true} />
						<Button intent="silent" value="Silent" isLoading={true} />
						<Button intent="success" value="Success" isLoading={true} />
						<Button intent="warning" value="Warning" isLoading={true} />
					</ButtonGroup>
					<ButtonGroup>
						<Button intent="advise" value="Advise" icon="arrow-left" />
						<Button
							intent="confirmation"
							value="Confirmation"
							icon="arrow-left"
						/>
						<Button intent="error" value="Error" icon="arrow-left" />
						<Button intent="highlight" value="Highlight" icon="arrow-left" />
						<Button intent="question" value="Question" icon="arrow-left" />
						<Button intent="silent" value="Silent" icon="arrow-left" />
						<Button intent="success" value="Success" icon="arrow-left" />
						<Button intent="warning" value="Warning" icon="arrow-left" />
					</ButtonGroup>
					<Separator />
				</Column>
				<Text type="paragraph">Compact</Text>
				<Column isColumn={true} gap={2} width={960}>
					<Alert intent="confirmation" icon="info" onClose={onClose}>
						Confirmation? Perferendis unde cupiditate tempore magnam corrupti
						quidem.
					</Alert>
					<Alert intent="error" icon="info" onClose={onClose}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
						unde cupiditate <a>aspernatur autem</a> tempore magnam vitae,
						quidem. Incidunt facilis aspernatur corrupti doloremque?
					</Alert>
					<Alert intent="highlight" icon="info" onClose={onClose}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
						unde cupiditate <a>aspernatur autem</a> tempore magnam.
					</Alert>
					<Alert intent="question" icon="info" onClose={onClose}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
						unde cupiditate <a>aspernatur autem</a> tempore magnam vitae.
					</Alert>

					<Alert intent="success" icon="info" onClose={onClose}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
						unde cupiditate <a>aspernatur autem</a> tempore magnam vitae.
					</Alert>
					<Alert intent="warning" icon="info" onClose={onClose}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
						unde cupiditate <a>aspernatur autem</a> tempore magnam vitae quidem.
						Incidunt facilis aspernatur corrupti doloremque?
					</Alert>
				</Column>
				<Text type="paragraph">Title</Text>
				<Column isColumn={true} gap={2} width={960}>
					<Alert
						title="Vitae, assumenda aliquid"
						intent="confirmation"
						icon="info"
						onClose={onClose}
					>
						Cupiditate <a>aspernatur autem</a> tempore magnam vitae, assumenda
						aliquid ab illo necessitatibus velit temporibus corrupti quidem.
						Incidunt facilis aspernatur corrupti doloremque?
					</Alert>
					<Alert
						title="Vitae, assumenda aliquid"
						intent="error"
						icon="info"
						onClose={onClose}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
						unde cupiditate <a>aspernatur autem</a> tempore magnam vitae,
						assumenda aliquid ab illo necessitatibus velit temporibus corrupti
						quidem. Incidunt facilis aspernatur corrupti doloremque?
					</Alert>
					<Alert
						title="Vitae, assumenda aliquid"
						intent="highlight"
						icon="info"
						onClose={onClose}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
						unde cupiditate <a>aspernatur autem</a> tempore magnam vitae,
						assumenda aliquid ab illo necessitatibus velit temporibus corrupti
						quidem. Incidunt facilis aspernatur corrupti doloremque?
					</Alert>
					<Alert
						title="Vitae, assumenda aliquid"
						intent="question"
						icon="info"
						onClose={onClose}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
						unde cupiditate <a>aspernatur autem</a> tempore magnam vitae,
						assumenda aliquid ab illo necessitatibus velit temporibus corrupti
						quidem. Incidunt facilis aspernatur corrupti doloremque?
					</Alert>

					<Alert
						title="Vitae, assumenda aliquid"
						intent="success"
						icon="info"
						onClose={onClose}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
						unde cupiditate <a>aspernatur autem</a> tempore magnam vitae,
						assumenda aliquid ab illo necessitatibus velit temporibus corrupti
						quidem. Incidunt facilis aspernatur corrupti doloremque?
					</Alert>
					<Alert
						title="Random Warning"
						intent="warning"
						icon="info"
						onClose={onClose}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
						unde cupiditate <a>aspernatur autem</a> tempore magnam vitae,
						assumenda aliquid ab illo necessitatibus velit temporibus corrupti
						quidem. Incidunt facilis aspernatur corrupti doloremque?
					</Alert>
				</Column>
			</Flex>
		</main>
	)
}
