import { type FC } from "react"
import { getClasses } from "@heliosgraphics/utils/classnames"
import { Flex, Text } from "@heliosgraphics/ui"
import styles from "./Alphabet.module.css"
import type { HeliosFontFamilyTypes } from "@heliosgraphics/ui"
import type { AlphabetProps, FontTypeInfo } from "./Alphabet.types"
import { FontFeature } from "./_components/FontFeature"

const FONT_SETS: Record<HeliosFontFamilyTypes, FontTypeInfo> = {
	mono: {
		name: "JetBrains Mono",
		url: "https://www.jetbrains.com/lp/mono/",
		license: "https://github.com/JetBrains/JetBrainsMono/blob/master/OFL.txt",
		className: "mono",
		description:
			"For monospace applications, we opt for JetBrains Mono due to its taller letters and specialized ligatures that boost readability and alleviate eye strain.",
	},
	serif: {
		name: "",
		url: "",
		license: "",
		description: "",
		className: "serif",
	},
	sans: {
		name: "Inter",
		url: "https://rsms.me/inter/",
		license: "https://github.com/rsms/inter/blob/master/LICENSE.txt",
		className: "sans",
		description:
			"Helios UI is using Inter as its main font for its quality, legibility, neutral style and scalability across different displays. Font features are chosen to enhance readability and ensure clear character distinction.",
		features: [
			{ name: "calt", description: "Contextual alternates" },
			{ name: "cv01", description: "Alternate one" },
			{ name: "cv02", description: "Open four" },
			{ name: "cv03", description: "Open six" },
			{ name: "cv04", description: "Open nine" },
			{ name: "cv06", description: "Simplified u" },
			{ name: "cv10", description: "Capital G with spur" },
			{ name: "cv09", description: "Flat-top three" },
			{ name: "dlig", description: "Discretionary Ligatures" },
			{ name: "ordn", description: "Ordinals" },
			{ name: "tnum", description: "Tabular Figures" },
			{ name: "ss03", description: "Round quotes & commas" },
			{ name: "zero", description: "Slashed Zero" },
		],
	},
}

export const Alphabet: FC<AlphabetProps> = ({ family }) => {
	const { name, url, license, className, description, features } = FONT_SETS[family]
	const letterClasses: string = getClasses(styles.alphabet__letter, className)

	return (
		<Flex isColumn={true} className={styles.alphabet} gap={8}>
			<Flex isColumn={true}>
				<div className={letterClasses}>
					<b>Aa</b>
				</div>
				<Text type="div" className={className}>
					{name}
				</Text>
				<Text type="tiny" emphasis="secondary">
					<Flex gap={2}>
						<a href={url}>Website</a>
						<span>&middot;</span>
						<a href={license}>License</a>
					</Flex>
				</Text>
			</Flex>
			{features?.length && (
				<Flex gap={2} isWrapping={true}>
					{features?.map((feature, key) => {
						return <FontFeature description={feature.description} name={feature.name} key={key} />
					})}
				</Flex>
			)}
			<Text type="small">{description}</Text>
		</Flex>
	)
}
