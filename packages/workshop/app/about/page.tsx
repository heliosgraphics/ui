import Page from "workshop/app/components/Page"
import { Markdown } from "@heliosgraphics/ui"

const PAGE = `This release is for friends and agents. Read the code on [GitHub](https://github.com/heliosgraphics/ui).

---

TBD

##### Architecture
###### Dependencies
###### Concepts
`

export default function Home() {
	return (
		<Page title="About">
			<Markdown text={PAGE} />
		</Page>
	)
}
