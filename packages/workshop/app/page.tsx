import { Button, ButtonGroup, Flex, Text, Separator } from "@heliosgraphics/ui"
import DebugSelector from "./components/DebugSelector"
import Page from "workshop/app/components/Page"
import uiPackage from "@heliosgraphics/ui/package.json"

export default function Home({}) {
	return (
		<Page title="User Interface" eyebrow="Helios">
			<Flex isColumn={true}>
				<Text type="paragraph">
					Helios UI is a dynamic guide that documents the visual, branding, and experience standards for our
					applications&mdash;and as such, strongly opinionated.
				</Text>
			</Flex>
			<Flex isColumn={true} gap={8}>
				<ButtonGroup>
					<a href="https://github.com/heliosgraphics/ui">
						<Button intent="advise" value="GitHub" icon="x-github" />
					</a>
					<a href="https://github.com/heliosgraphics/ui/issues">
						<Button intent="silent" value="Issues" icon="x-github" />
					</a>
				</ButtonGroup>
				<Text type="small" fontFamily="mono" emphasis="tertiary">
					pnpm add @heliosgraphics/ui<span className="non-selectable">@{uiPackage.version}</span>
				</Text>
			</Flex>
			<Separator isLight={true} />
			<DebugSelector />
		</Page>
	)
}
