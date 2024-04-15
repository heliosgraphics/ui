import Page from "workshop/app/components/Page"
import ColorGrid from "./components/ColorGrid"

export default function Home() {
	return (
		<Page title="Colors">
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
