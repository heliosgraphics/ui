import { Separator, Text } from "@heliosgraphics/ui"
import Page from "workshop/app/components/Page"
import ColorGrid from "./components/ColorGrid"

export default function Home() {
	return (
		<Page title="Colors">
			<Text type="paragraph">
				Colors in Helios UI indicate <em>intentions</em>.
			</Text>
			<Separator isLight={true} />
			<ColorGrid color="aqua" intention="question" />
			<ColorGrid color="blue" intention="advise" />
			<ColorGrid color="gray" intention="silent" />
			<ColorGrid color="green" intention="success" />
			<ColorGrid color="orange" intention="highlight" />
			<ColorGrid color="pink" intention="automation" />
			<ColorGrid color="purple" intention="confirmation" />
			<ColorGrid color="red" intention="error" />
			<ColorGrid color="yellow" intention="warning" />
		</Page>
	)
}
