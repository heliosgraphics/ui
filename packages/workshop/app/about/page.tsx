import Page from "workshop/app/components/Page"
import { Markdown, Text } from "@heliosgraphics/ui"

const PAGE = `---
---

### Architecture

TBD

### Dependencies

- [W3C](https://w3.org)
- [ECMA International](https://ecma-international.org/)
- [React](https://react.dev/), [React_(software)](https://en.wikipedia.org/wiki/React_(software))
- [\`@heliosgraphics/fractures\`](https://fractures.dev)
	- [\`xss\`](http://jsxss.com/)
- [\`@heliosgraphics/utils\`](https://fractures.dev)
- [\`@react-spring/web\`](https://www.react-spring.dev/)
- [\`@use-gesture/react\`](https://use-gesture.netlify.app/)
- [\`dayjs\`](https://day.js.org/)
- [\`highlightjs\`](https://highlightjs.org/)
- [\`markdown-it\`](https://markdown-it.github.io/)
- [\`react\`](https://react.dev)
- [\`react-dom\`](https://react.dev)
- [\`react-plock\`](https://react-plock-with-nextjs.vercel.app/)`

export default function Home() {
	return (
		<Page title="About">
			{/* <Text type="paragraph">
				Helios UI is the living guide for <a href="https://helios.graphics">Helios</a>&apos; visual and experience
				standards.
			</Text> */}
			<Markdown text={PAGE} />
		</Page>
	)
}
