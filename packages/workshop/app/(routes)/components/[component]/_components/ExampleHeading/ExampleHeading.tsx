"use client"

import { useState, type FC, type ChangeEvent } from "react"
import { Flex, Select, Heading, Separator, type TextProps, type SelectItem, type HeliosEmphasisType } from "@heliosgraphics/ui"

const EMPHASIS_LIST: Array<SelectItem> = [
	{ name: "Primary", value: "primary" },
	{ name: "Secondary", value: "secondary" },
	{ name: "Tertiary", value: "tertiary", isDisabled: true },
]

const FONT_FAMILIES: Array<SelectItem> = [
	{ name: "Sans", value: "sans" },
	{ name: "Mono", value: "mono" },
	{ name: "Serif", value: "serif" },
]

const FONT_WEIGHTS: Array<SelectItem> = [
	{ name: "Unset", value: "" },
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

export const ExampleHeading: FC = () => {
	const [emphasis, setEmphasis] = useState<HeliosEmphasisType>("primary")
	const [fontFamily, setFontFamily] = useState<TextProps["fontFamily"]>("sans")
	const [fontWeight, setFontWeight] = useState<TextProps["fontWeight"] | undefined>(undefined)

	const onEmphasisChange = (event: ChangeEvent<HTMLSelectElement>) => setEmphasis(event.target.value as HeliosEmphasisType)
	const onFontFamilyChange = (event: ChangeEvent<HTMLSelectElement>) =>
		setFontFamily(event.target.value as TextProps["fontFamily"])
	const onFontWeightChange = (event: ChangeEvent<HTMLSelectElement>) =>
		setFontWeight(event.target.value as TextProps["fontWeight"])

	return (
		<>
			<Separator isLight={true} />
			<Flex isColumn={true} gap={8} padding={16}>
				<Heading emphasis={emphasis} fontFamily={fontFamily} level={0} fontWeight={fontWeight}>
					Qi 1234567890
				</Heading>
				<Heading emphasis={emphasis} fontFamily={fontFamily} level={1} fontWeight={fontWeight}>
					In the “quaint” village of <a rel="author">Quixley</a>.
				</Heading>
				<Heading emphasis={emphasis} fontFamily={fontFamily} level={2} fontWeight={fontWeight}>
					In the “quaint” village of <a rel="author">Quixley</a>.
				</Heading>
				<Heading emphasis={emphasis} fontFamily={fontFamily} level={3} fontWeight={fontWeight}>
					In the “quaint” village of <a rel="author">Quixley</a>.
				</Heading>
				<Heading emphasis={emphasis} fontFamily={fontFamily} level={4} fontWeight={fontWeight}>
					In the “quaint” village of <a rel="author">Quixley</a>.
				</Heading>
				<Heading emphasis={emphasis} fontFamily={fontFamily} level={5} fontWeight={fontWeight}>
					In the “quaint” village of <a rel="author">Quixley</a>.
				</Heading>
				<Heading emphasis={emphasis} fontFamily={fontFamily} level={6} fontWeight={fontWeight}>
					In the “quaint” village of <a rel="author">Quixley</a>.
				</Heading>
			</Flex>
			<Separator isLight={true} />
			<Flex gap={4} padding={16}>
				<Select
					label="Emphasis"
					items={EMPHASIS_LIST}
					selectedValue={emphasis}
					onChange={onEmphasisChange}
					isLabelHidden={true}
				/>
				<Select
					label="Font Family"
					items={FONT_FAMILIES}
					selectedValue={fontFamily}
					onChange={onFontFamilyChange}
					isLabelHidden={true}
				/>
				<Select
					label="Font Weight"
					items={FONT_WEIGHTS}
					selectedValue={fontWeight}
					onChange={onFontWeightChange}
					isLabelHidden={true}
				/>
			</Flex>
		</>
	)
}
