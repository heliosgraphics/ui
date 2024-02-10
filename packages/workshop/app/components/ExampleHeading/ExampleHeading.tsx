"use client"

import { useState, type FC } from "react"
import {
	Flex,
	Select,
	Heading,
	Separator,
	type TextProps,
} from "@heliosgraphics/ui"
import type { ExampleHeadingProps } from "./ExampleHeading.types"

const EMPHASIS_LIST: Array<{
	name: string
	value: TextProps["emphasis"]
	isDisabled?: boolean
}> = [
	{ name: "Primary", value: "primary" },
	{ name: "Secondary", value: "secondary" },
	{ name: "Tertiary", value: "tertiary", isDisabled: true },
]

const FONT_FAMILIES: Array<{ name: string; value: TextProps["fontFamily"] }> = [
	{ name: "Sans", value: "sans" },
	{ name: "Mono", value: "mono" },
	{ name: "Serif", value: "serif" },
]

const FONT_WEIGHTS: Array<{
	name: string
	value: TextProps["fontWeight"] | undefined
}> = [
	{ name: "Unset", value: undefined },
	{ name: "Thin", value: "thin" },
	{ name: "Extra-Light", value: "extra-light" },
	{ name: "Light", value: "light" },
	{ name: "Normal", value: "normal" },
	{ name: "Medium", value: "medium" },
	{ name: "Semi-Bold", value: "semibold" },
	{ name: "Bold", value: "bold" },
	{ name: "Extra-Bold", value: "extra-bold" },
	{ name: "Black", value: "black" },
]

const ExampleHeading: FC<ExampleHeadingProps> = () => {
	const [emphasis, setEmphasis] = useState<TextProps["emphasis"]>("primary")
	const [fontFamily, setFontFamily] = useState<TextProps["fontFamily"]>("sans")
	const [fontWeight, setFontWeight] = useState<
		TextProps["fontWeight"] | undefined
	>(undefined)

	const onEmphasisChange = (event) => setEmphasis(event.target.value)
	const onFontFamilyChange = (event) => setFontFamily(event.target.value)
	const onFontWeightChange = (event) => setFontWeight(event.target.value)

	return (
		<Flex isColumn={true} gap={8}>
			<Flex gap={4}>
				<Select
					label="Type"
					items={EMPHASIS_LIST}
					selectedValue={emphasis}
					onChange={onEmphasisChange}
					isLabelHidden={true}
				/>
				<Select
					label="Type"
					items={FONT_FAMILIES}
					selectedValue={fontFamily}
					onChange={onFontFamilyChange}
					isLabelHidden={true}
				/>
				<Select
					label="Weight"
					items={FONT_WEIGHTS}
					selectedValue={fontWeight}
					onChange={onFontWeightChange}
					isLabelHidden={true}
				/>
			</Flex>
			<Separator />
			<Heading
				emphasis={emphasis}
				fontFamily={fontFamily}
				level={0}
				fontWeight={fontWeight}
			>
				Qi 1234567890
			</Heading>
			<Heading
				emphasis={emphasis}
				fontFamily={fontFamily}
				level={1}
				fontWeight={fontWeight}
			>
				In the "quaint" village of <a rel="author">Quixley</a>.
			</Heading>
			<Heading
				emphasis={emphasis}
				fontFamily={fontFamily}
				level={2}
				fontWeight={fontWeight}
			>
				In the "quaint" village of <a rel="author">Quixley</a>.
			</Heading>
			<Heading
				emphasis={emphasis}
				fontFamily={fontFamily}
				level={3}
				fontWeight={fontWeight}
			>
				In the "quaint" village of <a rel="author">Quixley</a>.
			</Heading>
			<Heading
				emphasis={emphasis}
				fontFamily={fontFamily}
				level={4}
				fontWeight={fontWeight}
			>
				In the "quaint" village of <a rel="author">Quixley</a>.
			</Heading>
			<Heading
				emphasis={emphasis}
				fontFamily={fontFamily}
				level={5}
				fontWeight={fontWeight}
			>
				In the "quaint" village of <a rel="author">Quixley</a>.
			</Heading>
			<Heading
				emphasis={emphasis}
				fontFamily={fontFamily}
				level={6}
				fontWeight={fontWeight}
			>
				In the "quaint" village of <a rel="author">Quixley</a>.
			</Heading>
		</Flex>
	)
}

export default ExampleHeading
