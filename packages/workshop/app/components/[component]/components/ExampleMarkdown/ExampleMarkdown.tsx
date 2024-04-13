"use client"

import { type FC } from "react"
import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"
import { Separator } from "@heliosgraphics/ui"
import type { ExampleMarkdownProps } from "./ExampleMarkdown.types"

const CODE_SAMPLE = `<Markdown text={INTRO_MD}/>`

const INTRO_MD: string = `# Donec vestibulum
## Nam porta, orci porta commodo
### Pellentesque eu est luctus
#### Nullam pulvinar convallis
##### Luctus sollicitudin ipsum
###### Aliquam erat volutpat

Praesent tincidunt elit ante, <a href="">sit amet aliquet nunc imperdiet</a> nec. In pulvinar volutpat lacus sed semper. Aliquam vulputate risus at lacinia aliquam.

|feature|description|
|--|--|
|calt|Contextual alternates|
|dlig|Discretionary Ligatures|

Mauris efficitur aliquam risus, id tempus quam pharetra vitae.

\`\`\`tsx
const ThemeSwitcher = dynamic(
	() => import("../../src/components/ThemeSwitcher"),
	{
		ssr: false,
		loading: () => <ThemeSwitcherLoading />,
	},
)
\`\`\`

Integer leo est, lobortis at nulla at, tempus dignissim velit. ~~Suspendisse dignissim~~, ipsum sit amet rhoncus tristique, urna risus accumsan leo, ut \`auctor augue function() {}\` sit amet metus. Proin purus risus, tincidunt a est a, porttitor dignissim erat. Sed vitae varius urna, sed <mark>mark tincidunt neque</mark>. Aenean egestas molestie ante nec pellentesque. Donec massa diam, molestie ac gravida at, commodo et diam.

---

- First item
- Second item

Orci varius natoque penatibus et <a>magnis dis parturient</a> montes, nascetur ridiculus mus. Aenean varius non magna dapibus pharetra. Pellentesque eget sapien sit amet massa dapibus lacinia. Integer auctor pulvinar erat, non pharetra felis fermentum ac.

> Proin purus risus, ~~tincidunt~~ a est a, porttitor dignissim erat. Sed vitae varius urna, sed tincidunt neque. Aenean egestas molestie ante nec pellentesque. Donec massa diam, molestie ac gravida at, commodo et diam.

<small>
Phasellus tristique tortor sed malesuada aliquam. Quisque cursus sodales velit, eget condimentum erat accumsan a. Fusce feugiat felis eros, in dignissim arcu imperdiet non. Fusce tincidunt eu dolor vitae pulvinar. Quisque dignissim nibh erat, eu iaculis est maximus sit amet. Vestibulum id lobortis nisi, a maximus leo. Etiam mattis rhoncus felis id condimentum. Vivamus ut nisi non nunc sollicitudin consectetur at id nisl. Vivamus quis turpis a leo pellentesque interdum et id diam. Fusce egestas diam orci, ut volutpat diam semper nec. Pellentesque accumsan consequat erat, id mattis mi ultrices sit amet.
</small>
`

const ExampleMarkdown: FC<ExampleMarkdownProps> = () => {
	return (
		<>
			<Separator isLight={true} />
			<LiveComponent code={CODE_SAMPLE} scope={{ INTRO_MD }} disabledBackground={true} />
		</>
	)
}

export default ExampleMarkdown
