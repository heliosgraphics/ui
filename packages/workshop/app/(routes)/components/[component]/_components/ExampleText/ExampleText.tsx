"use client"

import { useState, type FC, type ChangeEvent } from "react"
import { Flex, Select, Separator, type TextProps, type SelectItem } from "@heliosgraphics/ui"

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

const _TEXT = `In the hushed twilight, a single firefly dances amidst the whispering reeds, its glow a fleeting spark against the encroaching shadows.`

export const ExampleText: FC = () => {
	const [type, setType] = useState<TextProps["type"]>("div")
	const [fontFamily, setFontFamily] = useState<TextProps["fontFamily"]>("sans")

	const onTextSizeChange = (event: ChangeEvent<HTMLSelectElement>) => setType(event.target.value as TextProps["type"])
	const onFontFamilyChange = (event: ChangeEvent<HTMLSelectElement>) =>
		setFontFamily(event.target.value as TextProps["fontFamily"])

	return (
		<>
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
