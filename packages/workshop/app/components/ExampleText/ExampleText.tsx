"use client"

import { useState, type FC } from "react"
import { Flex, Select, Separator, Text, type TextProps } from "@heliosgraphics/ui"
import type { ExampleTextProps } from "./ExampleText.types"

const TEXT_TYPES: Array<{ name: string; value: TextProps["type"] }> = [
	{ name: "Tiny", value: "tiny" },
	{ name: "Small", value: "small" },
	{ name: "Paragraph", value: "paragraph" },
	{ name: "Div", value: "div" },
]

const FONT_FAMILIES: Array<{ name: string; value: TextProps["fontFamily"] }> = [
	{ name: "Sans", value: "sans" },
	{ name: "Mono", value: "mono" },
	{ name: "Serif", value: "serif" },
]

const ExampleText: FC<ExampleTextProps> = () => {
	const [type, setType] = useState<TextProps["type"]>("div")
	const [fontFamily, setFontFamily] = useState<TextProps["fontFamily"]>("sans")

	const onTextSizeChange = (event) => setType(event.target.value)
	const onFontFamilyChange = (event) => setFontFamily(event.target.value)

	return (
		<Flex isColumn={true} gap={8}>
			<Flex gap={4}>
				<Select label="Type" items={TEXT_TYPES} selectedValue={type} onChange={onTextSizeChange} isLabelHidden={true} />
				<Select
					label="Type"
					items={FONT_FAMILIES}
					selectedValue={fontFamily}
					onChange={onFontFamilyChange}
					isLabelHidden={true}
				/>
			</Flex>
			<Separator />
			<Text type={type} emphasis="primary" fontFamily={fontFamily}>
				In the quaint village of <a rel="author">Quixley</a>, quintessential quirks abounded among the <a>quivering quince</a>{" "}
				trees. Quintuplets quaffed quirky quiches quietly, their quizzical expressions quivering in the quixotic light of a
				quasar
			</Text>
			<Text type={type} emphasis="secondary" fontFamily={fontFamily}>
				In the <a>hushed twilight</a>, a single firefly dances amidst the whispering reeds, its glow a fleeting spark against
				the encroaching shadows.
			</Text>
			<Text type={type} emphasis="tertiary" fontFamily={fontFamily}>
				This ephemeral ballet, set against the backdrop of a dusky sky, speaks of the <a>delicate balance</a> between light and
				darkness, a testament to the transient beauty that flickers briefly in the fabric of time.
			</Text>
		</Flex>
	)
}

export default ExampleText
