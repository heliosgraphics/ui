import { Markdown } from "@heliosgraphics/ui"
import Page from "workshop/app/components/Page"

const PAGE = `### Personal

Helios UI is safe for small and personal projects. We're following [semver](https://semver.org/) releases as underlying concepts may change—make sure to pin the package version.

At this time we only support \`Typescript\` enabled \`NextJS\` projects using \`app\` folders.

- Add [fractures](https://fractures.dev) \`pnpm add @heliosgraphics/fractures\`
- Add UI package \`pnpm add @heliosgraphics/ui\`
- Load \`<Setup/>\` in your root \`layout.tsx\` for dark mode support, [like this](https://github.com/heliosgraphics/ui/blob/main/packages/workshop/app/layout.tsx) very page
- Load \`@heliosgraphics/fractures\` then \`components.css\` on top of \`layout.tsx\` to get global CSS

Feel free to open an [issue](https://github.com/heliosgraphics/ui/issues) if anything goes wrong. 🤍

---
---

### Scale

Drop us an [email](mailto:hello@helios.graphics).

`

export default function Home() {
	return (
		<Page title="Get Started">
			<Markdown text={PAGE} />
		</Page>
	)
}
