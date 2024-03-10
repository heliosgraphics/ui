import Page from "workshop/app/components/Page"
import { Markdown } from "@heliosgraphics/ui"

const PAGE = `This is a WIP release for friends and agents.
Read the code on [GitHub](https://github.com/heliosgraphics/ui).

---

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
