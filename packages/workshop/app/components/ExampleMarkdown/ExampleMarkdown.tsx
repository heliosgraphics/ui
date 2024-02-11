"use client"

import { type FC } from "react"
import { Separator, Flex, Text, Markdown } from "@heliosgraphics/ui"
import type { ExampleMarkdownProps } from "./ExampleMarkdown.types"

const INTRO_MD: string = `# Donec vestibulum
## Nam porta, orci porta commodo
### Pellentesque eu est luctus
#### Nullam pulvinar convallis
##### Luctus sollicitudin ipsum
###### Aliquam erat volutpat

Praesent tincidunt elit ante, <a href="">sit amet aliquet nunc imperdiet</a> nec. In pulvinar volutpat lacus sed semper. Aliquam vulputate risus at lacinia aliquam.

|before|after|
|--|--|
|001|002|

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

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean varius non magna dapibus pharetra. Pellentesque eget sapien sit amet massa dapibus lacinia. Integer auctor pulvinar erat, non pharetra felis fermentum ac.

> Proin purus risus, tincidunt a est a, porttitor dignissim erat. Sed vitae varius urna, sed tincidunt neque. Aenean egestas molestie ante nec pellentesque. Donec massa diam, molestie ac gravida at, commodo et diam.

<small>
Phasellus tristique tortor sed malesuada aliquam. Quisque cursus sodales velit, eget condimentum erat accumsan a. Fusce feugiat felis eros, in dignissim arcu imperdiet non. Fusce tincidunt eu dolor vitae pulvinar. Quisque dignissim nibh erat, eu iaculis est maximus sit amet. Vestibulum id lobortis nisi, a maximus leo. Etiam mattis rhoncus felis id condimentum. Vivamus ut nisi non nunc sollicitudin consectetur at id nisl. Vivamus quis turpis a leo pellentesque interdum et id diam. Fusce egestas diam orci, ut volutpat diam semper nec. Pellentesque accumsan consequat erat, id mattis mi ultrices sit amet.
</small>
`

const ExampleMarkdown: FC<ExampleMarkdownProps> = () => {
	return (
		<Flex isColumn={true} gap={12}>
			<Markdown text={INTRO_MD} />
			<Separator />
			<Text type="small" className="text-secondary">
				Mauris fermentum eros sit amet efficitur malesuada. Nam tempus placerat tellus, eu sit amet. Nunc viverra risus nibh, eu
				aliquet nulla tristique at. Duis auctor lectus est, id pellentesque felis malesuada ac. Ut sollicitudin vestibulum nibh,
				vitae suscipit justo condimentum et.
			</Text>
			<Text type="tiny" className="text-deemphasized">
				Vivamus euismod non arcu vel euismod. Nullam pharetra egestas metus suscipit tincidunt. Ut porttitor tempus velit, vitae
				condimentum. Morbi ultrices vel ante sed fringilla. Vivamus non odio ornare ex finibus mattis. Mauris dictum gravida
				orci, maximus hendrerit risus luctus at. Nam ultricies vel orci sed posuere. Nam sit amet accumsan turpis, sed lacinia
				nibh. Nullam imperdiet mauris ac mauris bibendum ornare. Pellentesque vel ipsum ante. Nam facilisis enim tellus, sit
				amet tristique massa fermentum vel. Vivamus vitae tincidunt ex, id porta lorem.
			</Text>
		</Flex>
	)
}

export default ExampleMarkdown
