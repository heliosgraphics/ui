"use client"

import { useState, type FC } from "react"
import { Flex, Select, Separator, type TextProps, type SelectItem } from "@heliosgraphics/ui"
import type { ExampleTextProps } from "./ExampleText.types"
import LiveComponent from "workshop/app/components/[component]/components/LiveComponent"

const TEXT_TYPES: Array<SelectItem> = [
	{ name: "Tiny", value: "tiny" },
	{ name: "Small", value: "small" },
	{ name: "Paragraph", value: "paragraph" },
	{ name: "Div", value: "div" },
]

const FONT_FAMILIES: Array<SelectItem> = [
	{ name: "Sans", value: "sans" },
	{ name: "Mono", value: "mono" },
	{ name: "Serif", value: "serif" },
]

const TEXT = `In the hushed twilight, a single firefly dances amidst the whispering reeds, its glow a fleeting spark against the encroaching shadows.`

const CODE_SAMPLE = `<Flex isColumn={true} gap={8} padding={16}>
	<Text type={type} emphasis="primary" fontFamily={fontFamily}>{TEXT}</Text>
	<Text type={type} emphasis="secondary" fontFamily={fontFamily}>{TEXT}</Text>
	<Text type={type} emphasis="tertiary" fontFamily={fontFamily}>{TEXT}</Text>
</Flex>`

const ExampleText: FC<ExampleTextProps> = () => {
	const [type, setType] = useState<TextProps["type"]>("div")
	const [fontFamily, setFontFamily] = useState<TextProps["fontFamily"]>("sans")

	const onTextSizeChange = (event) => setType(event.target.value)
	const onFontFamilyChange = (event) => setFontFamily(event.target.value)

	return (
		<>
			<LiveComponent code={CODE_SAMPLE} scope={{ TEXT, type, fontFamily }} />
			<Separator isLight={true} />
			<Flex gap={8} padding={16}>
				<Select label="Type" items={TEXT_TYPES} selectedValue={type} onChange={onTextSizeChange} isLabelHidden={true} />
				<Select
					label="Type"
					items={FONT_FAMILIES}
					selectedValue={fontFamily}
					onChange={onFontFamilyChange}
					isLabelHidden={true}
				/>
			</Flex>
		</>
	)
}

export default ExampleText
