import { Markdown } from "@heliosgraphics/ui"
import Page from "workshop/app/components/Page"

const PAGE = `Helios UI is safe for small and personal projects. We're following [semver](https://semver.org/) releases as underlying concepts may change—make sure to pin the package version.

Works best in \`Typescript\` enabled \`NextJS\` projects using \`app\` folder.

- Add [fractures](https://fractures.dev) \`pnpm add @heliosgraphics/fractures\`
- Add UI package \`pnpm add @heliosgraphics/ui\`
- Load \`<Setup/>\` in your root \`layout.tsx\` for dark mode support, [like this](https://github.com/heliosgraphics/ui/blob/main/packages/workshop/app/layout.tsx) very page
- Load \`@heliosgraphics/fractures\` then \`components.css\` on top of \`layout.tsx\`

Send us an [email](mailto:hello@helios.graphics) 💌 for anything else.
`

export default function Home() {
	return (
		<Page title="Get Started">
			<Markdown text={PAGE} />
		</Page>
	)
}
