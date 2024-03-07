import { Markdown } from "@heliosgraphics/ui"
import Page from "workshop/app/components/Page"

const PAGE = `# License

TBD
`

export default function Home() {
	return (
		<Page title="License">
			<Markdown text={PAGE} />
		</Page>
	)
}
