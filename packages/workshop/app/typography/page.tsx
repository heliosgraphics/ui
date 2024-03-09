import React from "react"
import Alphabet from "./components/Alphabet"
import Page from "workshop/app/components/Page"
import { Flex, Heading, Separator, Text } from "@heliosgraphics/ui"
import HeadingInfo from "./components/HeadingInfo"

const TypographyPage = () => {
	return (
		<Page title="Typography">
			<Text type="paragraph">
				Helios UI is using <b>Inter</b> and <b>Jetbrains Mono</b> for sans and mono fonts respectively. Both are free,
				open source and designed for user interfaces. 🤍
			</Text>
			<Flex gap={12} isWrapping={true}>
				<Alphabet family="sans" />
				<Alphabet family="mono" />
			</Flex>
			<Separator />
			<Heading level={1}>Scale</Heading>
			<Flex isColumn gap={6}>
				<HeadingInfo level={0}>Heading 0</HeadingInfo>
				<HeadingInfo level={1}>Heading 1</HeadingInfo>
				<HeadingInfo level={2}>Heading 2</HeadingInfo>
				<HeadingInfo level={3}>Heading 3</HeadingInfo>
				<HeadingInfo level={4}>Heading 4</HeadingInfo>
				<HeadingInfo level={5}>Heading 5</HeadingInfo>
				<HeadingInfo level={6}>Heading 6</HeadingInfo>
				<Separator />
				<HeadingInfo level="paragraph">
					Curabitur metus ex, imperdiet ultricies odio faucibus, ornare viverra est. Vestibulum vitae felis arcu. Fusce
					sed laoreet metus. Sed venenatis id diam non accumsan. Donec elementum ante et lacus scelerisque efficitur.
					Nam feugiat molestie odio, sed sagittis odio lacinia eget. Duis eget porta lorem.
				</HeadingInfo>
				<HeadingInfo level="small">
					Mauris fringilla leo mauris, sed varius sapien egestas et. In ultrices ipsum vitae tincidunt scelerisque. Sed
					aliquam aliquam sapien, eu pellentesque libero fermentum non. Sed semper, lorem at tempus varius, leo odio
					dictum metus, sit amet suscipit massa erat id nisi. Aliquam mollis ex et dolor vestibulum, in blandit quam
					mattis. Nullam efficitur sapien fermentum dolor eleifend, in facilisis eros euismod.
				</HeadingInfo>
				<HeadingInfo level="tiny">
					Quisque suscipit posuere libero et porta. Nulla gravida ipsum sed sem auctor vestibulum. Morbi a dapibus odio,
					molestie accumsan nisi. Nulla quis ex vitae metus commodo pulvinar.
				</HeadingInfo>
				<Separator />
				<HeadingInfo level="monoParagraph">function() &#x7B;</HeadingInfo>
				<HeadingInfo level="monoSmall">Nullam efficitur sapien.</HeadingInfo>
				<HeadingInfo level="monoTiny">suspendisse potenti</HeadingInfo>
			</Flex>
		</Page>
	)
}

export default TypographyPage
