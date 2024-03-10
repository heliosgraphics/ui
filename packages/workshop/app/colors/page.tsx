import { Separator, Text } from "@heliosgraphics/ui"
import Page from "workshop/app/components/Page"
import ColorGrid from "./components/ColorGrid"

export default function Home() {
	return (
		<Page title="Colors">
			<Text type="paragraph">
				Helios UI colors are embracing inherently human hues to convey intentions clearly, ensuring a consistently warm
				and inviting atmosphere.
			</Text>
			<Text type="small" emphasis="secondary">
				Defined in HSL.
			</Text>
			<Separator isLight={true} />
			<ColorGrid intention="question" />
			<ColorGrid intention="advise" />
			<ColorGrid intention="silent" />
			<ColorGrid intention="success" />
			<ColorGrid intention="highlight" />
			<ColorGrid intention="automation" />
			<ColorGrid intention="confirmation" />
			<ColorGrid intention="danger" />
			<ColorGrid intention="warning" />
		</Page>
	)
}
