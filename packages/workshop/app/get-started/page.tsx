import { Markdown } from "@heliosgraphics/ui"
import Page from "workshop/app/components/Page"

const PAGE = `### Installation

- 1.
- 2.
`

export default function Home() {
	return (
		<Page title="Get Started">
			<Markdown text={PAGE} />
		</Page>
	)
}
