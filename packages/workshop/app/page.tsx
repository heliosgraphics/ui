import { Button, ButtonGroup, Flex, Text, Separator, Heading } from "@heliosgraphics/ui"
import DebugSelector from "./components/DebugSelector"
import Page from "workshop/app/components/Page"
import uiPackage from "@heliosgraphics/ui/package.json"

export default function Home({}) {
	return (
		<Page>
			<Flex isColumn={true} gap={4}>
				<Flex isColumn={true}>
					<Text type="small" fontFamily="mono" emphasis="secondary">
						@heliosgraphics/ui<span className="non-selectable">@{uiPackage.version}</span> &middot;{" "}
						<span className="non-selectable">Pre-Release</span>
					</Text>
					<Heading level={0}>Helios UI</Heading>
				</Flex>
				<Text type="paragraph">
					Baseline design system documenting our visual and experience standards.
					<br />
					Always evolving, intentional and opinionated.
				</Text>
				<Text type="small" emphasis="secondary">
					Typescript components in React as a Module, almost no{" "}
					<a href="https://github.com/heliosgraphics/ui/blob/main/packages/components/package.json">3rd parties</a>.
				</Text>
			</Flex>
			<Flex isColumn={true} gap={8}>
				<ButtonGroup>
					<a href="/get-started" tabIndex={-1}>
						<Button intent="advise" value="Start Building" icon="eye" />
					</a>
					<a href="https://github.com/heliosgraphics/ui" tabIndex={-1}>
						<Button intent="silent" value="Contribute" icon="x-github" />
					</a>
				</ButtonGroup>
			</Flex>
			{/* <Separator isLight={true} /> */}
			{/* <Markdown text={PAGE} /> */}
			<Separator isLight={true} />
			<DebugSelector />
		</Page>
	)
}
